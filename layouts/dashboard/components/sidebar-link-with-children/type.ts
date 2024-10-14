import { IconType } from 'react-icons/lib'

export type TProps = {
  id: number
  name: string
  icon: IconType
  submenus: Array<{
    id: number
    name: string
    href: string
  }>
}
