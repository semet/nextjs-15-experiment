import { axiosClient } from '@/apis'
import { TDeleteBatch } from '@/schemas/batch'
import { successResponse } from '@/schemas/common'

export const deleteBatchRequest = async (params: TDeleteBatch) => {
  try {
    const response = await axiosClient.delete(`/batch/${params.id}`)
    return successResponse.parse(response.data)
  } catch {
    throw new Error('An error occurred')
  }
}
