import { FC } from 'react'
import { CgSpinner } from 'react-icons/cg'

import { Button } from '@/components/ui'

import { Props } from './type'

export const SubmitButton: FC<Props> = (props) => {
  const { isLoading, confirmText, onCancel } = props

  return (
    <div className="flex justify-center gap-4">
      <Button
        type="reset"
        variant="warning"
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button
        variant="primary"
        type="submit"
      >
        {isLoading ? (
          <CgSpinner className="mx-auto animate-spin" />
        ) : (
          (confirmText ?? 'Save')
        )}
      </Button>
    </div>
  )
}
