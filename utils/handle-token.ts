import { setCookie } from 'cookies-next'
import { decode, JwtPayload } from 'jsonwebtoken'

import { cookieKeys } from '@/configs'
import { TLoginResponse } from '@/schemas/auth'

const { tokenKey, refreshTokenKey } = cookieKeys

export const handleToken = (params: TLoginResponse) => {
  const { refreshToken, token } = params
  const decodedToken = decode(token) as JwtPayload

  const decodedRefreshToken = decode(refreshToken) as JwtPayload
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

  setCookie(refreshTokenKey, refreshToken, {
    sameSite: 'strict',
    expires: refreshTokenExpiration
  })
}
