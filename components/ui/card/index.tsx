import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { Props } from './type'

export const Card = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, header, className, ...rest } = props

  return (
    <div
      className={twMerge(['rounded-xl bg-white shadow', className])}
      ref={ref}
      {...rest}
    >
      {header && <div className="border-b px-5 py-3">{header}</div>}
      <div className="px-5 py-4">{children}</div>
    </div>
  )
})

Card.displayName = 'Card'
