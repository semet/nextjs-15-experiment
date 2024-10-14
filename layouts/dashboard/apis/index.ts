import { axiosClient } from '@/apis'

export const logoutRequest = async () => {
  try {
    const response = await axiosClient.post('/logout')
    return response.data
  } catch {
    throw new Error('Something went wrong')
  }
}
