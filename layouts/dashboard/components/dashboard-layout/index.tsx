import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { clearToken } from '@/utils'

import { Props } from './type'

export const DashboardLayout: FC<Props> = ({ children }) => {
  const { push } = useRouter()
  const handleLogout = () => {
    clearToken()
    push('/auth/login')
  }
  return (
    <div className="container mx-auto border px-4 py-2">
      <nav className="mb-4">
        <ul className="flex gap-4">
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <button onClick={handleLogout}>logout</button>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}
