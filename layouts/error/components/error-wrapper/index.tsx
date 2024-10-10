import React from 'react'
import { useErrorBoundary } from 'react-error-boundary'

export const ErrorWrapper = () => {
  const { resetBoundary } = useErrorBoundary()
  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={resetBoundary}>Reset</button>
    </div>
  )
}
