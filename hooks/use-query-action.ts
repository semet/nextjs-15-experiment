import { useQueryClient } from '@tanstack/react-query'

type Params<T> = {
  queryKey: ReadonlyArray<T>
}

export const useQueryActions = <T>(params: Params<T>) => {
  const { queryKey } = params
  const queryClient = useQueryClient()

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queryKey
    })
  }

  const resetQueries = () => {
    queryClient.resetQueries({
      queryKey: queryKey
    })
  }

  const removeQueries = () => {
    queryClient.removeQueries({
      queryKey: queryKey
    })
  }

  return {
    invalidateQueries,
    resetQueries,
    removeQueries
  }
}
