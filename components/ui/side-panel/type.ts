import { Dispatch, PropsWithChildren, ReactNode, SetStateAction } from 'react'

export type Props = PropsWithChildren<{
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onClose?: () => void
  title?: ReactNode
  isLoading?: boolean
}>
