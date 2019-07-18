import React, { useEffect, useState } from 'react'
import styled, { withTheme } from 'styled-components'
import Loader from 'react-loader-spinner'
import { Text, Column, Row, Input, Button, Checkbox, Card, Modal } from '../components'
import ToolsService from '../services/tools'

export default withTheme(props => {
  const [isLoading, setIsLoading] = useState(true)
  const [tools, setTools] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    const getTools = async () => {
      try {
        const response = await ToolsService.getAll()
        setTools(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setTimeout(() => setIsLoading(false), 500)
      }
    }
    getTools()
  }, [])

  const toggleModal = () => setModalIsOpen(!modalIsOpen)

  const handleClickAddToll = () => {
    toggleModal()
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
          if (isLoading) {
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
                  <Input placeholder='search' mr='10px' />
                  <Checkbox label='search in tags only' mt='20px' />
                </Row>
                <Button width='100px' onClick={handleClickAddToll}>
                  <Icon src='assets/images/add-circle.svg' size={20} /> Add
                </Button>
              </Row>
              <Column>
                {tools.map((tool, id) => (
                  <Card mb='30px' elevation={1} key={id}>
                    <Row justify='space-between' mb='15px'>
                      <Text as='h5'>{tool.title}</Text>
                      <Button variant='quartiary' kind='danger'>
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
        <Text onClick={toggleModal}>modal</Text>
      </Modal>
    </Row>
  )
})

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
