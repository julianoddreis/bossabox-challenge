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
  width: 158px;
  height: 35px;
`

const TerciaryButtonNeutral = styled.button`
  ${props => {
    const { theme: { colors }, disabled } = props
    return `
      ${defaultStyles}
      color: ${colors.blue}
      ${modifiers(props)}
      ${disabled ? `
        background: ${colors.mostLightestBlue};
        cursor: not-allowed;
        color: ${colors.lighterBlue};
        ` : `
        background: ${colors.mostLightestBlue};
        &:hover {
          background: ${colors.lightestBlue};
        }
        &:active {
          background: ${colors.lighterBlue};
        }
      `}
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
        background: ${colors.mostLightestGreen};
        cursor: not-allowed;
        color: ${colors.lightGreen};
        ` : `
        background: ${colors.mostLightestGreen};
        &:hover {
          background: ${colors.lightestGreen};
        }
        &:active {
          background: ${colors.lighterGreen};
        }
      `}
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
        background: ${colors.mostLightestRed};
        cursor: not-allowed;
        color: ${colors.lightRed};
        ` : `
        background: ${colors.mostLightestRed};
        &:hover {
          background: ${colors.lightestRed};
        }
        &:active {
          background: ${colors.lighterRed};
        }
      `}
    `
  }}
`
