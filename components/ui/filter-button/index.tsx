import React, { FC } from 'react'
import { MdOutlineFilterAlt } from 'react-icons/md'

import { Props } from './type'

export const FilterButton: FC<Props> = (props) => {
  const { icon: Icon = MdOutlineFilterAlt, ...rest } = props
  return (
    <button
      className="rounded-full p-2 text-gray-600 hover:bg-blue-100/40 hover:text-primary"
      {...rest}
    >
      <Icon className="text-lg" />
    </button>
  )
}
