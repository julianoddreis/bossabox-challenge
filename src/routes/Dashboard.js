import React, { useEffect, useState } from 'react'
import styled, { withTheme } from 'styled-components'
import Loader from 'react-loader-spinner'
import { Text, Column, Row, Input, Button, Checkbox, Card, Modal } from '../components'
import { withNotification } from '../HoCs'
import ToolsService from '../services/tools'

const newToolInitialValues = {
  title: '',
  link: '',
  description: '',
  tags: ''
}

const Dashboard = props => {
  const [isLoading, setIsLoading] = useState(true)
  const [tools, setTools] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [searchFilter, setSearchFilter] = useState('')
  const [searchOnlyTags, setSearchOnlyTags] = useState(false)
  const [formWasSubmitted, setFormWasSubmitted] = useState(false)
  const [newToolErrors, setNewToolErrors] = useState({})
  const [newToolValues, setNewToolValues] = useState(newToolInitialValues)
  const [toolToRemove, setToolToRemove] = useState(null)

  const getTools = async (params = '') => {
    try {
      const response = await ToolsService.getTools(params)
      setTools(response.data)
    } catch (error) {
      props.notification('Error', 'Something went wrong', 'error')
    } finally {
      setTimeout(() => setIsLoading(false), 500)
    }
  }

  useEffect(() => {
    const typeOfSearch = searchOnlyTags ? 'tags_like' : 'q'
    const params = searchFilter ? `?${typeOfSearch}=${searchFilter}` : ''
    getTools(params)
  }, [searchFilter, searchOnlyTags])

  const toggleModal = () => setModalIsOpen(!modalIsOpen)

  const handleSearchInputChange = ({ target }) => setSearchFilter(target.value)

  const handleOnlyTagsChange = () => setSearchOnlyTags(!searchOnlyTags)

  const handleChangeNewToolForm = ({ target: { name, value } }) => {
    if (formWasSubmitted) {
      validateNewTool()
    }
    setNewToolValues({
      ...newToolValues,
      [name]: value
    })
  }

  const validateNewTool = () => {
    const errors = Object.keys(newToolValues).reduce((acc, curr) => {
      if (newToolValues[curr] !== '') return acc
      return { ...acc, [curr]: 'Required' }
    }, {})
    setNewToolErrors(errors)
    return Object.keys(errors).length === 0
  }

  const submitNewTool = async () => {
    setFormWasSubmitted(true)
    const isValid = validateNewTool()
    if (!isValid) {
      return
    }
    setIsLoading(true)
    try {
      const newTool = {
        ...newToolValues,
        tags: newToolValues.tags.split(' ')
      }
      const res = await ToolsService.create(newTool)
      setTimeout(() => {
        setTools([...tools, res.data])
        setFormWasSubmitted(false)
        setNewToolValues(newToolInitialValues)
        setModalIsOpen(false)
        setIsLoading(false)
        props.notification('It\'s done!', 'The new tool was added.', 'success')
      }, 500)
    } catch (error) {
      props.notification('Error', 'Something went wrong', 'error')
      setIsLoading(false)
    }
  }

  const deleteTool = async () => {
    setIsLoading(true)
    try {
      await ToolsService.delete(toolToRemove.id)
      const newTools = tools.filter(tool => tool.id !== toolToRemove.id)
      setTimeout(() => {
        setTools(newTools)
        setIsLoading(false)
        setToolToRemove(null)
        props.notification('It\'s done!', 'The tool was deleted with success.', 'success')
      }, 500)
    } catch (error) {
      props.notification('Error', 'Something went wrong', 'error')
      setIsLoading(false)
      setToolToRemove(null)
    }
  }

  return (
    <Row justify='center' pt='100px'>
      <Column maxWidth='800px'>
        <Text as='h1' mb='20px'>
          VUTTR
        </Text>
        <Text as='h5' mb='20px'>
          Very Useful Tools to Remember
        </Text>
        {(() => {
          if (isLoading && !modalIsOpen && !toolToRemove) {
            return (
              <LoaderContainer>
                <Loader type='Oval' height={80} width={80} color={props.theme.colors.ink} />
              </LoaderContainer>
            )
          }
          return (
            <>
              <Row align='flex-start' justify='space-between'>
                <Row align='flex-start'>
                  <Input placeholder='search' mr='10px' onChange={handleSearchInputChange} value={searchFilter} />
                  <Checkbox
                    label='search in tags only'
                    mt='20px'
                    checked={searchOnlyTags}
                    onChange={handleOnlyTagsChange}
                  />
                </Row>
                <Button width='100px' onClick={toggleModal}>
                  <Icon src='assets/images/add-circle.svg' size={20} /> Add
                </Button>
              </Row>
              <Column>
                {tools.map((tool, id) => (
                  <Card mb='30px' elevation={1} key={id}>
                    <Row justify='space-between' mb='15px'>
                      <Link target='blank' href={tool.link}>
                        <Text as='h5'>{tool.title}</Text>
                      </Link>
                      <Button variant='quartiary' kind='danger' onClick={() => setToolToRemove(tool)}>
                        <Icon src='assets/images/icon-close.svg' size={12} /> remove
                      </Button>
                    </Row>
                    <Text mb='10px' color={props.theme.colors.darkBlue}>
                      {tool.description}
                    </Text>
                    <Row>
                      {tool.tags.map(tag => (
                        <Text mr='15px' key={tag}>
                          #{tag}
                        </Text>
                      ))}
                    </Row>
                  </Card>
                ))}
              </Column>
            </>
          )
        })()}
      </Column>
      <Modal isOpen={modalIsOpen}>
        <Column align='center'>
          <Text as='h4' mb='20px'>
            Add new tool
          </Text>
          <Input
            label='Tool Name'
            name='title'
            onChange={handleChangeNewToolForm}
            value={newToolValues.title}
            error={newToolErrors.title}
          />
          <Input
            label='Tools Link'
            name='link'
            onChange={handleChangeNewToolForm}
            value={newToolValues.link}
            error={newToolErrors.link}
          />
          <Input
            as='textarea'
            rows='3'
            label='Tool description'
            name='description'
            onChange={handleChangeNewToolForm}
            value={newToolValues.description}
            error={newToolErrors.description}
          />
          <Input
            label='Tags'
            name='tags'
            onChange={handleChangeNewToolForm}
            value={newToolValues.tags}
            error={newToolErrors.tags}
          />
          <Row width='400px' justify='space-between' mt='20px'>
            <Button kind='danger' onClick={toggleModal} disabled={isLoading}>
              Cancel
            </Button>
            {isLoading ? (
              <Loader color={props.theme.colors.ink} type='Oval' height={40} width={40} />
            ) : (
              <Button onClick={submitNewTool}>Add tool</Button>
            )}
          </Row>
        </Column>
      </Modal>
      {toolToRemove && (
        <Modal isOpen>
          <Column align='center'>
            <Text as='h4' mb='20px'>
            Remove tool
            </Text>
            <Text as='p' mb='20px'>
            Are you sure you want to remove {toolToRemove.title}?
            </Text>
            <Row width='400px' justify='space-between' mt='20px'>
              <Button kind='danger' onClick={() => setToolToRemove(null)} disabled={isLoading}>
              Cancel
              </Button>
              {isLoading ? (
                <Loader color={props.theme.colors.ink} type='Oval' height={40} width={40} />
              ) : (
                <Button onClick={deleteTool}>Yes, remove</Button>
              )}
            </Row>
          </Column>
        </Modal>
      )}
    </Row>
  )
}

const Icon = styled.img`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
    margin-right: 10px;
  `}
`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 50px;
`

const Link = styled.a`
  text-decoration: none;
`

export default withTheme(withNotification(Dashboard))
