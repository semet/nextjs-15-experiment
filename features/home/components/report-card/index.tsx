import Image from 'next/image'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { Props } from './type'

export const ReportCard: FC<Props> = (props) => {
  const { className, icon, name, value, ...rest } = props
  return (
    <div
      className={twMerge([
        'flex flex-col items-center rounded-lg py-6 shadow',
        className
      ])}
      {...rest}
    >
      <Image
        src={icon}
        alt={name}
        width={50}
        height={50}
      />
      <span className="mt-4 text-sm font-medium">{name}</span>
      <span className="text-xl font-semibold">{value}</span>
    </div>
  )
}
