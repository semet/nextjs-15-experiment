import { useMutation } from '@tanstack/react-query'
import { FC, Fragment, useState } from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'

import { ModalDialog } from '@/components/ui'
import { batchMutationKeys } from '@/factories/mutation'
import { batchKey } from '@/factories/query'
import { deleteBatchRequest } from '@/features/batch'
import { useQueryActions } from '@/hooks'

import { Props } from './type'

export const DeleteBatch: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { invalidateQueries } = useQueryActions({
    queryKey: batchKey.batches
  })

  const { mutate } = useMutation({
    mutationKey: batchMutationKeys.delete(props.id),
    mutationFn: deleteBatchRequest,
    onSuccess: () => {
      invalidateQueries()
      setIsOpen(false)
    }
  })
  return (
    <Fragment>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded p-2 text-gray-600 hover:bg-blue-50/40 hover:text-danger"
      >
        <MdDeleteOutline />
        <span className="text-sm">Delete</span>
      </button>
      <ModalDialog
        size="xs"
        centered
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        showBackdrop
        onConfirm={() => {
          mutate({
            id: props.id
          })
        }}
        confirmText="Delete"
      >
        <div className="flex flex-col items-center gap-4">
          <AiOutlineExclamationCircle className="text-6xl text-rose-400" />
          <span className="text-gray-600">Are you sure?</span>
        </div>
      </ModalDialog>
    </Fragment>
  )
}
