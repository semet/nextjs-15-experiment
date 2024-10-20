import { twMerge } from 'tailwind-merge'

import { polymorphicForwardRef } from '@/types/components'

import { ButtonProps } from './type'

export const Button = polymorphicForwardRef<'button', ButtonProps>(
  (
    {
      as: Element = 'button',
      className,
      children,
      variant = 'primary',
      ...props
    },
    ref
  ) => (
    <Element
      className={twMerge([
        'group relative inline-block min-w-16 overflow-hidden rounded-lg px-5 py-2.5',
        variant === 'primary' && 'bg-primary/20 text-primary',
        variant === 'secondary' && 'bg-gray-100 text-gray-500',
        variant === 'danger' && 'bg-danger/20 text-danger',
        variant === 'warning' && 'bg-warning/20 text-warning',
        className
      ])}
      ref={ref}
      {...props}
    >
      <span
        className={twMerge([
          'absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform opacity-90 transition-all duration-200 ease-out group-hover:h-full',
          variant === 'primary' && 'bg-primary',
          variant === 'secondary' && 'bg-gray-600',
          variant === 'danger' && 'bg-danger',
          variant === 'warning' && 'bg-warning'
        ])}
      ></span>
      <span className="relative group-hover:text-white"> {children}</span>
    </Element>
  )
)
