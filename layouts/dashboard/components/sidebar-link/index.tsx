import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { TProps } from './type'

export const SidebarLink: FC<TProps> = ({ href, icon: Icon, name }) => {
  const { pathname } = useRouter()
  return (
    <Link
      href={href}
      className={twMerge([
        'flex items-center gap-2 rounded-lg p-3',
        pathname === href ? 'bg-primary text-white' : '',
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
