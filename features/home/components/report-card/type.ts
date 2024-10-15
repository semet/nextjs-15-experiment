import { ComponentProps } from 'react'

export type Props = ComponentProps<'div'> & {
  name: string
  icon: string
  value: number
}
