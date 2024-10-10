import { FC } from 'react'

import { Props } from './type'

export const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  )
}
