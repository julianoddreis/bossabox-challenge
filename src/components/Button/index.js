import React from 'react'
import PrimaryButton from './PrimayButton'
import SecondaryButton from './SecondaryButton'
import TerciaryButton from './TerciaryButton'
import QuartiaryButton from './QuartiaryButton'

export default props => {
  const { variant, ...rest } = props
  if (variant === 'secondary') {
    return <SecondaryButton {...rest} />
  }
  if (variant === 'terciary') {
    return <TerciaryButton {...rest} />
  }
  if (variant === 'quartiary') {
    return <QuartiaryButton {...rest} />
  }
  return <PrimaryButton {...rest} />
}
