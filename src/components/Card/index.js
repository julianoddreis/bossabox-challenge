import React from 'react'
import styled from 'styled-components'

import modifiers from '../../helpers/modifiers'

export default props => {
  const { children, ...rest } = props
  return (
    <Card {...rest}>
      {children}
    </Card>
  )
}

const Card = styled.div`
  ${props => {
    const { theme: { colors } } = props
    return `
      border: 1px solid ${colors.darkestWhite};
      border-radius: 5px;
      padding: 20px;
      ${modifiers(props)}
      ${elevation(props.elevation)}
    `
  }}
`

const elevation = elevation => {
  if (elevation === 1) {
    return 'box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.05);'
  }
  if (elevation === 2) {
    return 'box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);'
  }
  if (elevation === 3) {
    return 'box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.07);'
  }
  if (elevation === 4) {
    return 'box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.10);'
  }
  return ''
}
