import React from 'react'
import styled from 'styled-components'
import { Row, Text } from '../'

export default props => {
  const { notification: { title, description, type }, close, ...rest } = props
  return (
    <Banner type={type} {...rest}>
      <Row align='center' justify='space-between' mb='20px'>
        <Text variant='bold' color='white'>{title}</Text>
        <Icon onClick={close} src='assets/images/close-white.svg' size={12} />
      </Row>
      <Text color='white' as='small'>{description}</Text>
    </Banner>
  )
}

const Banner = styled.div`
  ${props => {
    const { theme: { colors }, type } = props
    const error = type === 'error'
    return `
      box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      padding: 20px 50px;
      background-color: ${error ? colors.red : colors.green};
      display: flex;
      flex-direction: column;
    `
  }}
`

const Icon = styled.img`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
    margin-right: 10px;
  `}
`
