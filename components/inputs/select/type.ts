import { FieldValues, Path, RegisterOptions } from 'react-hook-form'
import type { Props } from 'react-select'

import { TSize } from '@/types/components'

export type SelectProps<T extends FieldValues> = Props & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  labelClassName?: string
  errorClassName?: string
  size?: TSize
}
