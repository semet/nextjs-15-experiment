import { FC } from 'react'

import { Breadcrumb } from '@/layouts/dashboard'

import { Props } from './type'

export const PageTitle: FC<Props> = (props) => {
  const { title } = props
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-[#edf2ff] p-6 shadow">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <Breadcrumb />
    </div>
  )
}
