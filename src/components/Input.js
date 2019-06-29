import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Row, Column, Text } from './'

import modifiers from '../helpers/modifiers'

export default withTheme(props => {
  const { label, placeholder, required, error, errorMessage, theme: { colors }, ...rest } = props
  return (
    <InputContainer>
      {label && (
        <Row flex={0}>
          <Text mb='10px' bold>{label}</Text>
          {required && <Text pt='5px' pl='5px' color={error ? colors.red : colors.lightInk}>*</Text>}
        </Row>
      )}
      <InputComponent
        placeholder={placeholder}
        error={error}
        {...rest}
      />
      {error &&
        <Error flex={0}>
          <Text as='small' mt='8px' color={colors.red}>{errorMessage}</Text>
        </Error>
      }
    </InputContainer>
  )
})

const InputContainer = styled(Column)`
  position: relative;
  padding-bottom: 30px;
`

const InputComponent = ({ as, ...rest }) => {
  if (as === 'textarea') {
    return <Textarea {...rest} />
  }
  return <Input {...rest} />
}

const Input = styled.input`
  ${props => defaultStyles(props)}
`

const Textarea = styled.textarea`
  ${props => defaultStyles(props)}
`

const Error = styled(Row)`
  position: absolute;
  bottom: 0;
  right: 0;
`

const defaultStyles = props => {
  const { error, theme: { colors } } = props
  return `
    padding: 12px 22px;
    border-radius: 5px;
    color: ${colors.ink};
    font-family: 'Source Sans Pro', regular;
    font-size: 20px;
    width: 400px;
    ${modifiers(props)};
    border: 1px solid ${colors.darkestWhite};
    background: ${colors.darkerWhite};
    ::placeholder {
      color: ${colors.lighterInk};
    }
    ${error ? `
      border: 1px solid ${colors.red};
      background: ${colors.mostLightestRed};
      color: ${colors.red};
      ::placeholder {
        color: ${colors.red};
      }
    ` : `
      &:focus {
        border: 1px solid ${colors.mostDarkestWhite};
        background: ${colors.darkestWhite};
        ::placeholder {
          color: ${colors.lightInk};
        }
      }
    `}
    outline: none;
    transition: all 0.3s ease-in-out;
  `
}
