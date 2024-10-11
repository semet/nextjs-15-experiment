/* eslint-disable no-console */
import { AxiosError } from 'axios'
import { ZodError } from 'zod'

import { axiosClient } from '@/apis'
import { dashboardSchema } from '@/schemas/home'
import { TParams } from '@/types/request'

export const getHomepageDataRequest = async (params: TParams) => {
  const { signal } = params
  try {
    const response = await axiosClient.get('/dashboard', { signal })
    return dashboardSchema.parse(response.data)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error?.response?.data?.message || error.message)
    } else if (error instanceof ZodError) {
      console.error(error.errors[0])
    } else {
      throw new Error('Something went')
    }
  }
}
