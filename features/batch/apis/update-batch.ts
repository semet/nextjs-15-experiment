import { axiosClient } from '@/apis'
import { TEditBatch } from '@/schemas/batch'
import { successResponse } from '@/schemas/common'
import { flattenObject } from '@/utils'
export const updateBatchRequest = async (params: TEditBatch) => {
  const { id, ...rest } = params
  try {
    const response = await axiosClient.put(`/batch/${id}`, flattenObject(rest))
    return successResponse.parse(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
