import React from 'react'
import { Text, Column, Row } from '../components'

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
        <input />
      </Row>
    </Column>
  </Row>
)
