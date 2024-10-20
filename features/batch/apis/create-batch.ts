import { axiosClient } from '@/apis'
import { TCreateBatch } from '@/schemas/batch'
import { successResponse } from '@/schemas/common'
import { flattenObject } from '@/utils'
export const createBatchRequest = async (params: TCreateBatch) => {
  const payload = flattenObject(params)
  try {
    const response = await axiosClient.post('/batch', payload)
    return successResponse.parse(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
