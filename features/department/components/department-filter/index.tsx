import { Fragment, useState } from 'react'
import { MdOutlineFilterAlt } from 'react-icons/md'

import { FilterButton, ModalDialog } from '@/components/ui'

export const DepartmentFilter = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      <FilterButton
        icon={MdOutlineFilterAlt}
        onClick={() => setIsOpen(true)}
      />
      <ModalDialog
        size="lg"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        showBackdrop
        onConfirm={() => {
          // eslint-disable-next-line no-console
          console.log('confirmed')
        }}
        title="Filter"
        confirmText="Apply"
      >
        <form>Filter content</form>
      </ModalDialog>
    </Fragment>
  )
}
