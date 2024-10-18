import Image from 'next/image'
import { FC } from 'react'

import { Breadcrumb } from '@/layouts/dashboard'

import { Props } from './type'

export const PageTitle: FC<Props> = (props) => {
  const { title } = props
  return (
    <div className="relative flex flex-col gap-3 overflow-hidden rounded-xl bg-[#edf2ff] p-6 shadow">
      <Image
        src="/images/bg/ChatBc.webp"
        alt=""
        width={150}
        height={150}
        className="absolute -top-2 right-10 hidden object-cover md:block"
        rel="preload"
        priority
      />
      <h1 className="text-center text-xl font-semibold text-gray-800 md:text-left">
        {title}
      </h1>
      <Breadcrumb />
    </div>
  )
}
