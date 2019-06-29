import React from 'react'
import { Text, Column, Row, Input } from '../components'

export default () => (
  <Row justify='center' pt='100px'>
    <Column maxWidth='800px'>
      <Text as='h1' mb='20px'>
        VUTTR
      </Text>
      <Text as='h5' mb='20px'>
        Very Useful Tools to Remember
      </Text>
      <Row>
        <Input label='Test' required placeholder='search' />
      </Row>
    </Column>
  </Row>
)
