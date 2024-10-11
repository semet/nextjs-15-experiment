import { axiosClient } from '@/apis'
import { dashboardSchema } from '@/schemas/home'
import { TParams } from '@/types/request'

export const getHomepageDataRequest = async (params: TParams) => {
  const { signal } = params
  try {
    const response = await axiosClient.get('/dashboard', { signal })
    return dashboardSchema.parse(response.data)
  } catch {
    throw new Error('Something went')
  }
}
