import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Text, Column, Row, Input, Button, Checkbox, Card } from '../components'
import ToolsService from '../services/tools'

export default () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tools, setTools] = useState([])

  useEffect(() => {
    const getTools = async () => {
      try {
        const response = await ToolsService.getAll()
        setTools(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getTools()
  }, [])

  return (
    <Row justify='center' pt='100px'>
      <Column maxWidth='800px'>
        <Text as='h1' mb='20px'>
          VUTTR
        </Text>
        <Text as='h5' mb='20px'>
          Very Useful Tools to Remember
        </Text>
        <Row align='flex-start' justify='space-between'>
          <Row align='flex-start'>
            <Input placeholder='search' mr='10px' />
            <Checkbox label='search in tags only' mt='20px' />
          </Row>
          <Button width='100px'>
            <AddIcon src='assets/images/add-circle.svg' /> Add
          </Button>
        </Row>
        <Column>
          {tools.map(tool =>
            <Card>
              {tool.title}
            </Card>
          )}
        </Column>
      </Column>
    </Row>
  )
}

const AddIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
