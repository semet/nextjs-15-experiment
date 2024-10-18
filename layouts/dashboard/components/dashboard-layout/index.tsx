import { FC } from 'react'

import {
  SidebarContainer,
  HeaderContainer,
  PageTitle,
  DashboardProvider
} from '@/layouts/dashboard'

import { Props } from './type'

export const DashboardLayout: FC<Props> = ({ children, title }) => {
  return (
    <DashboardProvider>
      <div className="container flex min-w-full">
        <SidebarContainer />
        <div className="w-full bg-gray-50">
          <HeaderContainer />
          <main className="p-6">
            {title && <PageTitle title={title} />}
            <div className="my-6">{children}</div>
          </main>
        </div>
      </div>
    </DashboardProvider>
  )
}
