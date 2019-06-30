import React from 'react'
import { Text, Column, Row, Input, Button, Checkbox, Card } from '../components'

export default () => (
  <Row justify='center' pt='100px'>
    <Column maxWidth='800px'>
      <Text as='h1' mb='20px'>
        VUTTR
      </Text>
      <Text as='h5' mb='20px'>
        Very Useful Tools to Remember
      </Text>
      <Column>
        <Input label='Test' required placeholder='search' />
        <Checkbox mb='30px' label='Checkbox' />
        <Checkbox mb='30px' disabled label='Checkbox' />
        <Button mb='10px'>Button</Button>
        <Button mb='10px' disabled>Button</Button>
        <Button mb='10px' kind='success'>Button</Button>
        <Button mb='10px' kind='success' disabled>Button</Button>
        <Button mb='10px' kind='danger'>Button</Button>
        <Button mb='10px' kind='danger' disabled>Button</Button>
        _______
        <Button mb='10px' variant='secondary'>Button</Button>
        <Button mb='10px' variant='secondary' disabled>Button</Button>
        <Button mb='10px' variant='secondary' kind='success'>Button</Button>
        <Button mb='10px' variant='secondary' kind='success' disabled>Button</Button>
        <Button mb='10px' variant='secondary' kind='danger'>Button</Button>
        <Button mb='10px' variant='secondary' kind='danger' disabled>Button</Button>
        _______
        <Button mb='10px' variant='terciary'>Button</Button>
        <Button mb='10px' variant='terciary' disabled>Button</Button>
        <Button mb='10px' variant='terciary' kind='success'>Button</Button>
        <Button mb='10px' variant='terciary' kind='success' disabled>Button</Button>
        <Button mb='10px' variant='terciary' kind='danger'>Button</Button>
        <Button mb='10px' variant='terciary' kind='danger' disabled>Button</Button>
        ______
        <Button mb='10px' variant='quartiary'>Button</Button>
        <Button mb='10px' variant='quartiary' disabled>Button</Button>
        <Button mb='10px' variant='quartiary' kind='success'>Button</Button>
        <Button mb='10px' variant='quartiary' kind='success' disabled>Button</Button>
        <Button mb='10px' variant='quartiary' kind='danger'>Button</Button>
        <Button variant='quartiary' kind='danger' disabled>Button</Button>
        <Card mb='30px'>
          Card
        </Card>
        <Card elevation={1} mb='30px'>
          Card el1
        </Card>
        <Card elevation={2} mb='30px'>
          Card el2
        </Card>
        <Card elevation={3} mb='30px'>
          Card el3
        </Card>
        <Card elevation={4} mb='30px'>
          Card el4
        </Card>
      </Column>
    </Column>
  </Row>
)
