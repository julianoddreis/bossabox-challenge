import React from 'react'
import styled from 'styled-components'

import modifiers from '../../helpers/modifiers'

const customProps = as => ({
  ...(as === 'h1') && { fontSize: '42px', variant: 'bold' },
  ...(as === 'h2') && { fontSize: '36px', variant: 'bold' },
  ...(as === 'h3') && { fontSize: '30px', variant: 'bold' },
  ...(as === 'h4') && { fontSize: '26px', variant: 'bold' },
  ...(as === 'h5') && { fontSize: '24px', variant: 'bold' },
  ...(as === 'p') && { fontSize: '20px' },
  ...(as === 'small') && { fontSize: '18px' },
  ...(as === 'smallest') && { fontSize: '16px' }
})

const TextComponent = ({ as = 'p', children, ...rest }) => {
  return React.createElement(as, rest, children)
}

const StyledText = styled(TextComponent)`
  ${props => {
    const { as = 'p', theme, color, fontFamily } = props
    const { fontSize = props.fontSize, variant = props.variant } = customProps(as)
    return `
      margin: 0;
      padding: 0;
      ${modifiers(props)}
      font-family: ${fontFamily || "'Source Sans Pro', sans-serif"};
      color: ${color || theme.colors.ink};
      ${fontSize ? `font-size: ${fontSize};` : ''}
      ${variant === 'bold' ? `font-weight: bold;` : ''}
    `
  }};
`

export default StyledText
