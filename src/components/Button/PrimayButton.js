import React from 'react'
import styled from 'styled-components'

import modifiers from '../../helpers/modifiers'

export default props => {
  const { children, kind, ...rest } = props
  if (kind === 'success') {
    return (
      <PrimaryButtonSuccess {...rest}>
        {children}
      </PrimaryButtonSuccess>
    )
  }
  if (kind === 'danger') {
    return (
      <PrimaryButtonDanger {...rest}>
        {children}
      </PrimaryButtonDanger>
    )
  }
  return (
    <PrimaryButtonNeutral {...rest}>
      {children}
    </PrimaryButtonNeutral>
  )
}

const defaultStyles = `
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  border-radius: 5px;
  border: none;
  color: white;
  width: 174px;
  height: 50px;
`

const PrimaryButtonNeutral = styled.button`
  ${props => {
    const { theme: { colors }, disabled } = props
    return `
      ${defaultStyles}
      ${modifiers(props)}
      ${disabled ? `
        background: ${colors.lighterBlue};
        cursor: not-allowed;
        color: ${colors.mostLightestBlue};
        ` : `
        background: ${colors.blue};
        &:hover {
          background: ${colors.darkBlue};
        }
        &:active {
          background: ${colors.darkerBlue};
        }
      `}
    `
  }}
`

const PrimaryButtonSuccess = styled.button`
  ${props => {
    const { theme: { colors }, disabled } = props
    return `
      ${defaultStyles}
      ${modifiers(props)}
      ${disabled ? `
        background: ${colors.lightGreen};
        cursor: not-allowed;
        color: ${colors.mostLightestGreen};
        ` : `
        background: ${colors.green};
        &:hover {
          background: ${colors.darkGreen};
        }
        &:active {
          background: ${colors.darkerGreen};
        }
      `}
    `
  }}
`

const PrimaryButtonDanger = styled.button`
  ${props => {
    const { theme: { colors }, disabled } = props
    return `
      ${defaultStyles}
      ${modifiers(props)}
      ${disabled ? `
        background: ${colors.lightRed};
        cursor: not-allowed;
        color: ${colors.mostLightestRed};
        ` : `
        background: ${colors.red};
        &:hover {
          background: ${colors.darkRed};
        }
        &:active {
          background: ${colors.darkerRed};
        }
      `}
    `
  }}
`
