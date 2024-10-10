import { AxiosError } from 'axios'

export const throwError = (error: unknown) => {
  if (error instanceof AxiosError) {
    throw new Error(error.response?.data.message)
  } else if (error instanceof Error) {
    throw new Error(error.message)
  } else {
    throw new Error('An error occurred')
  }
}
