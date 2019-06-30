import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Text, Row } from '../'

export default withTheme(props => {
  const { onChange, checked, ...rest } = props
  return (
    <Row align='center' flex={0} {...rest}>
      <Checkbox type='checkbox' onChange={onChange} checked={checked} />
      <Text color={props.disabled ? props.theme.colors.lightestInk : ''} ml='8px'>{props.label}</Text>
    </Row>
  )
})

const Checkbox = styled.input`
  width: 15px;
  height: 15px;
`
