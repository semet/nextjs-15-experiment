import { axiosClient } from '@/apis'
import { departmentResponse } from '@/schemas/department'
import { TSignal } from '@/types/request'

export const getDepartment = async (params: TSignal) => {
  const { signal } = params
  try {
    const response = await axiosClient.get('/departments', { signal })
    return departmentResponse.parse(response.data)
  } catch {
    throw new Error('An error occurred')
  }
}
