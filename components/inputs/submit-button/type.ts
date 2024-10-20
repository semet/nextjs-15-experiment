import { ReactNode } from 'react'

export type Props = {
  isLoading?: boolean
  confirmText?: ReactNode
  onCancel: () => void
}
