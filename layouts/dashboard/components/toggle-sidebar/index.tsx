import { LuMenu } from 'react-icons/lu'

export const ToggleSidebar = () => {
  return (
    <button className="hover:text-primary rounded-full p-2 text-gray-600 hover:bg-blue-100/40">
      <LuMenu className="h-5 w-5" />
    </button>
  )
}
