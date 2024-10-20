import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { useBreakpointValue } from '@/hooks'
import { useDashboard } from '@/layouts/dashboard'

import { TProps } from './type'

export const SidebarLink: FC<TProps> = ({ href, icon: Icon, name }) => {
  const { pathname } = useRouter()
  const { toggleSidebar } = useDashboard()
  const deviceType = useBreakpointValue({
    base: 'mobile',
    sm: 'mobile',
    md: 'tablet',
    lg: 'desktop',
    xl: 'desktop'
  })
  return (
    <Link
      href={href}
      onClick={() => {
        if (deviceType === 'mobile' || deviceType === 'tablet') {
          toggleSidebar()
        }
      }}
      className={twMerge([
        'flex items-center gap-2 rounded-lg p-3',
        pathname === href
          ? 'bg-gradient-to-r from-primary to-indigo-700 text-white shadow-lg'
          : '',
        pathname !== href
          ? 'text-gray-600 hover:bg-blue-100/40 hover:text-primary'
          : ''
      ])}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm">{name}</span>
    </Link>
  )
}
