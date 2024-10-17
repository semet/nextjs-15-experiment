import { MdOutlineAdd } from 'react-icons/md'

import { BatchFilter } from '@/features/batch'

export const BatchToolbar = () => {
  return (
    <div className="flex justify-end gap-4">
      <BatchFilter />
      <button className="rounded-lg bg-primary/10 p-2 text-gray-600 hover:bg-primary hover:text-white">
        <MdOutlineAdd className="text-lg" />
      </button>
    </div>
  )
}
