import { useId } from 'react'
import { useFormContext, get, FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { InputProps } from './type'

export const TextInput = <T extends Record<string, unknown>>(
  props: InputProps<T>
) => {
  const {
    id,
    name,
    rules,
    className,
    containerClassName,
    rightNode,
    label,
    labelClassName,
    errorClassName,
    required,
    type = 'text',
    size = 'md',
    ...rest
  } = props

  const {
    register,
    formState: { errors }
  } = useFormContext()

  const generatedId = useId()

  const error: FieldError = get(errors, name)

  return (
    <div
      className={twMerge([
        containerClassName,
        'relative flex w-full flex-col gap-1'
      ])}
    >
      {label && (
        <label
          htmlFor={id ?? generatedId}
          className={twMerge([labelClassName, 'text-gray-700'])}
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <div className="flex">
        <input
          type={type}
          id={id ?? generatedId}
          className={twMerge([
            'w-full rounded text-gray-700 focus:border-primary focus:ring-0 disabled:bg-gray-200 disabled:text-gray-400',
            size === 'sm'
              ? 'px-2 py-1.5 text-sm'
              : size === 'md'
                ? 'px-3 py-2 text-base'
                : 'px-4 py-3 text-lg',
            error
              ? 'border-rose-500 ring-rose-500'
              : 'border-gray-300 ring-gray-300',
            className
          ])}
          {...register(name, rules)}
          {...rest}
        />
        {rightNode && rightNode}
      </div>
      {error && (
        <span
          className={twMerge([
            errorClassName,
            'absolute -bottom-4 text-xs text-rose-500'
          ])}
        >
          {error?.message?.toString()}
        </span>
      )}
    </div>
  )
}
