import { FC } from 'react'

import { SidebarContainer, HeaderContainer } from '@/layouts/dashboard'

import { Props } from './type'

export const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container flex min-w-full">
      <SidebarContainer />
      <div className="w-full bg-gray-50">
        <HeaderContainer />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
