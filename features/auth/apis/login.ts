import { axiosClient } from '@/apis'
import { loginResponse, TLogin } from '@/schemas/auth'

export const loginRequest = async (data: TLogin) => {
  try {
    const response = await axiosClient.post('/login', data)
    return loginResponse.parse(response.data)
  } catch {
    throw new Error('An error occurred')
  }
}
