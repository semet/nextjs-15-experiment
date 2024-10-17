import dynamic from 'next/dynamic'
import { ChangeEvent, useId } from 'react'
import { Controller, FieldError, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { CustomOption } from './custom-option'
import { SelectProps } from './type'

const ReactSelect = dynamic(() => import('react-select'), {
  ssr: false
})

export const Select = <T extends Record<string, unknown>>(
  props: SelectProps<T>
) => {
  const {
    name,
    id,
    label,
    onChange,
    className,
    containerClassName,
    errorClassName,
    labelClassName,
    required,
    isSearchable = false,
    size = 'md',
    ...rest
  } = props
  const generatedId = useId()

  const {
    control,
    formState: { errors }
  } = useFormContext()

  const error: FieldError = get(errors, name)
  return (
    <div
      className={twMerge([
        'relative flex w-full flex-col gap-1.5',
        containerClassName
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
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <ReactSelect
              instanceId={id ?? generatedId}
              components={{ Option: CustomOption }}
              onChange={(newValue, actionMeta) => {
                if (onChange) {
                  onChange(
                    newValue as ChangeEvent<HTMLInputElement>,
                    actionMeta
                  )
                }
                field.onChange(newValue)
              }}
              value={field.value}
              isSearchable={isSearchable}
              className={twMerge([className])}
              styles={{
                control: (base, state) => ({
                  ...base,
                  borderRadius: '.25rem',
                  borderColor: error ? '#f43f5e' : '#d1d5db',
                  textWrap: 'nowrap',
                  fontSize:
                    size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',

                  height:
                    size === 'sm' ? '34px' : size === 'md' ? '42px' : '54px',
                  minHeight:
                    size === 'sm' ? '34px' : size === 'md' ? '42px' : '54px',
                  '&:hover': {
                    borderColor: state.isFocused ? '#5d86ff' : '#d1d5db'
                  },
                  boxShadow: 'none'
                }),
                menu: (base) => ({
                  ...base,
                  fontSize: '0.875rem'
                }),
                indicatorSeparator: () => ({
                  display: 'none'
                }),
                option: (base, state) => ({
                  ...base,
                  color: state.isSelected ? 'black' : 'black',
                  backgroundColor: state.isSelected
                    ? 'white'
                    : state.isFocused
                      ? '#f3f4f6'
                      : 'white'
                })
              }}
              {...rest}
            />
          )
        }}
      />
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
