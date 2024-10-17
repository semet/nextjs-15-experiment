import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { Props } from './type'

export const Card = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, header, className, ...rest } = props

  return (
    <div
      className={twMerge(['space-y-2', className])}
      ref={ref}
      {...rest}
    >
      {header && (
        <div className="rounded-t-xl bg-white px-5 py-6 shadow">{header}</div>
      )}
      <div
        className={twMerge([
          'overflow-hidden rounded-b-xl bg-white shadow',
          !header ? 'rounded-t-xl' : ''
        ])}
      >
        {children}
      </div>
    </div>
  )
})

Card.displayName = 'Card'
