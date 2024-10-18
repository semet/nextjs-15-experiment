import { LuMenu } from 'react-icons/lu'

import { useDashboard } from '@/layouts/dashboard'

export const ToggleSidebar = () => {
  const { toggleSidebar } = useDashboard()
  return (
    <button
      onClick={toggleSidebar}
      className="rounded-full p-2 text-gray-600 hover:bg-blue-100/40 hover:text-primary"
    >
      <LuMenu className="h-5 w-5" />
    </button>
  )
}
