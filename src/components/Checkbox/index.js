import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Text, Row } from '../'

export default withTheme(props => {
  const { onChange, checked, ...rest } = props
  return (
    <Row align='center' {...rest}>
      <Text as='label' color={props.disabled ? props.theme.colors.lightestInk : ''} ml='8px'>
        <Checkbox type='checkbox' onChange={onChange} checked={checked} />
        {props.label}
      </Text>
    </Row>
  )
})

const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  margin-top: 10px;
`
