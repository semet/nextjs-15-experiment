import { Dispatch, PropsWithChildren, SetStateAction } from 'react'

export type Props = PropsWithChildren<{
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onClose: () => void
  onConfirm?: () => void
  confirmText?: string
  title?: string
  showBackdrop?: boolean
  size?: 'sm' | 'md' | 'lg'
  centered?: boolean
}>
