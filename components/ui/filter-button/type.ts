import { ComponentProps } from 'react'
import { IconType } from 'react-icons/lib'

export type Props = ComponentProps<'button'> & {
  icon: IconType
}
