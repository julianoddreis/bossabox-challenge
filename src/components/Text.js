import React from 'react'
import styled from 'styled-components'

import modifiers from '../helpers/modifiers'

const customProps = as => ({
  ...(as === 'h1') && { fontSize: '42px', bold: true },
  ...(as === 'h2') && { fontSize: '36px', bold: true },
  ...(as === 'h3') && { fontSize: '30px', bold: true },
  ...(as === 'h4') && { fontSize: '26px', bold: true },
  ...(as === 'h5') && { fontSize: '24px', bold: true },
  ...(as === 'p') && { fontSize: '20px' },
  ...(as === 'small') && { fontSize: '18px' },
  ...(as === 'smallest') && { fontSize: '16px' }
})

const TextComponent = ({ as = 'p', children, ...rest }) => {
  return React.createElement(as, rest, children)
}

const StyledText = styled(TextComponent)`
  ${props => {
    const { as, theme, color, fontFamily } = props
    const { fontSize, bold } = customProps(as)
    return `
      margin: 0;
      padding: 0;
      ${modifiers(props)}
      font-family: ${fontFamily || "'Source Sans Pro', sans-serif"};
      color: ${color || theme.colors.ink};
      ${fontSize ? `font-size: ${fontSize};` : ''}
      ${bold ? `font-weight: bold;` : ''}
    `
  }};
`

export default StyledText
