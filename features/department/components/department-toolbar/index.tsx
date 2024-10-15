import { MdOutlineAdd } from 'react-icons/md'

import { DepartmentFilter } from '@/features/department'

export const DepartmentToolbar = () => {
  return (
    <div className="flex justify-end">
      <DepartmentFilter />
      <button className="rounded-full p-2 text-gray-600 hover:bg-blue-100/40 hover:text-primary">
        <MdOutlineAdd className="text-lg" />
      </button>
    </div>
  )
}
