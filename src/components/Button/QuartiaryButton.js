import React from 'react'
import styled from 'styled-components'

import modifiers from '../../helpers/modifiers'

export default props => {
  const { children, kind, ...rest } = props
  if (kind === 'success') {
    return (
      <TerciaryButtonSuccess {...rest}>
        {children}
      </TerciaryButtonSuccess>
    )
  }
  if (kind === 'danger') {
    return (
      <TerciaryButtonDanger {...rest}>
        {children}
      </TerciaryButtonDanger>
    )
  }
  return (
    <TerciaryButtonNeutral {...rest}>
      {children}
    </TerciaryButtonNeutral>
  )
}

const defaultStyles = `
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  border-radius: 5px;
  border: none;
  width: auto;
  height: 35px;
  background: white;
`

const TerciaryButtonNeutral = styled.button`
  ${props => {
    const { theme: { colors }, disabled } = props
    return `
      ${defaultStyles}
      color: ${colors.blue}
      ${modifiers(props)}
      ${disabled ? `
        cursor: not-allowed;
        color: ${colors.lighterBlue};
        ` : ''}
    `
  }}
`

const TerciaryButtonSuccess = styled.button`
  ${props => {
    const { theme: { colors }, disabled } = props
    return `
      ${defaultStyles}
      color: ${colors.green};
      ${modifiers(props)}
      ${disabled ? `
        cursor: not-allowed;
        color: ${colors.lightGreen};
        ` : ''}
    `
  }}
`

const TerciaryButtonDanger = styled.button`
  ${props => {
    const { theme: { colors }, disabled } = props
    return `
      ${defaultStyles}
      color: ${colors.red};
      ${modifiers(props)}
      ${disabled ? `
        cursor: not-allowed;
        color: ${colors.lightRed};
        ` : ''}
    `
  }}
`
