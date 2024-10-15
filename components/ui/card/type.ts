import { ComponentProps, PropsWithChildren, ReactElement } from 'react'

export type Props = ComponentProps<'div'> &
  PropsWithChildren<{
    header?: ReactElement
  }>
