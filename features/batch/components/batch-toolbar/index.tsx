import { BatchFilter, CreateBatch } from '@/features/batch'

export const BatchToolbar = () => {
  return (
    <div className="flex justify-end gap-4">
      <BatchFilter />
      <CreateBatch />
    </div>
  )
}
