import { ComponentProps } from 'react'

export type TProps = {
  indeterminate?: boolean
} & ComponentProps<'input'>
