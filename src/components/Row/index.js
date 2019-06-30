import styled from 'styled-components'

import modifiers from '../../helpers/modifiers'

export default styled.div`
  ${props => {
    const { flex, align, justify } = props
    return `
      ${modifiers(props)}
      display: flex;
      flex: ${flex !== undefined ? flex : 1};
      flex-direction: row;
      flex-wrap: wrap;
      ${align ? `align-items: ${align}` : ''};
      ${justify ? `justify-content: ${justify}` : ''};
    `
  }}
`
