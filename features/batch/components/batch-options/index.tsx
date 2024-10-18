import { FC } from 'react'
import { MdOutlineMoreHoriz } from 'react-icons/md'

import { DropDown } from '@/components/ui'
import { DeleteBatch, EditBatch } from '@/features/batch'

import { Props } from './type'

export const BatchOptions: FC<Props> = (props) => {
  const { batch } = props
  return (
    <DropDown trigger={<MdOutlineMoreHoriz />}>
      <EditBatch batch={batch} />
      <DeleteBatch id={batch.id} />
    </DropDown>
  )
}
