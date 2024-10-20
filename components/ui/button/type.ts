import { ComponentPropsWithRef, PropsWithChildren } from 'react'

export type ButtonProps = PropsWithChildren<{
  variant?: 'primary' | 'secondary' | 'danger' | 'warning'
}> &
  ComponentPropsWithRef<'button'>
