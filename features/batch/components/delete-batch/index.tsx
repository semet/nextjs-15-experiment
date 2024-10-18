import { FC, Fragment, useState } from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'

import { ModalDialog } from '@/components/ui'

import { Props } from './type'

export const DeleteBatch: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

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
        size="sm"
        centered
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        showBackdrop
        onConfirm={() => {
          // eslint-disable-next-line no-console
          console.log('confirmed')
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
