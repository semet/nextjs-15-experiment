import axios from 'axios'
import { deleteCookie, setCookie } from 'cookies-next'
import { decodeJwt } from 'jose'

import { cookieKeys } from '@/configs'
import { loginResponse, TLoginResponse } from '@/schemas/auth'

const { tokenKey, refreshTokenKey } = cookieKeys

export const handleToken = (params: TLoginResponse, forceRefresh = true) => {
  const { refreshToken, token } = params
  const decodedToken = decodeJwt(token)

  const decodedRefreshToken = decodeJwt(refreshToken)
  const tokenExpiration = decodedToken.exp
    ? new Date(decodedToken.exp * 1000)
    : undefined
  const refreshTokenExpiration = decodedRefreshToken.exp
    ? new Date(decodedRefreshToken.exp * 1000)
    : undefined

  setCookie(tokenKey, token, {
    sameSite: 'strict',
    expires: tokenExpiration
  })
  if (forceRefresh) {
    setCookie(refreshTokenKey, refreshToken, {
      sameSite: 'strict',
      expires: refreshTokenExpiration
    })
  }
}

export const clearToken = () => {
  deleteCookie(tokenKey)
  deleteCookie(refreshTokenKey)
}

export const handleRefreshToken = async (refreshToken: string | undefined) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/student/refresh-token',
      {
        refreshToken
      }
    )

    const data = loginResponse.parse(response.data)
    return data
  } catch {
    throw new Error('Error refreshing token')
  }
}
