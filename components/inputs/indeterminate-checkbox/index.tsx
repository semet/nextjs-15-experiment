import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { TProps } from './type'

export const IndeterminateCheckbox = (props: TProps) => {
  const { indeterminate, className, ...rest } = props

  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, indeterminate])

  return (
    <input
      type="checkbox"
      ref={ref}
      className={twMerge(
        'cursor-pointer rounded-[5px] border border-[#C1C1C1] text-primary focus:ring-0 focus:ring-offset-0',
        className
      )}
      {...rest}
    />
  )
}
