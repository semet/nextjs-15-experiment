import { decodeJwt } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

import { cookieKeys, publicPaths } from './configs'
import { handleRefreshToken } from './utils'

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request
  const response = NextResponse.next()
  const { refreshTokenKey, tokenKey } = cookieKeys
  const token = cookies.get(tokenKey)?.value
  const refreshToken = cookies.get(refreshTokenKey)?.value

  const decodedToken = token ? decodeJwt(token) : undefined
  const decodedRefreshToken = refreshToken ? decodeJwt(refreshToken) : undefined

  const tokenExpiration =
    decodedToken && decodedToken.exp
      ? new Date(decodedToken.exp * 1000)
      : undefined
  const refreshTokenExpiration =
    decodedRefreshToken && decodedRefreshToken.exp
      ? new Date(decodedRefreshToken.exp * 1000)
      : undefined

  const now = new Date()

  const isTokenExpired = tokenExpiration ? now > tokenExpiration : true
  const isRefreshTokenExpired = refreshTokenExpiration
    ? now > refreshTokenExpiration
    : true

  if (isTokenExpired && isRefreshTokenExpired) {
    const url = nextUrl.clone()
    url.pathname = '/auth/login'
    return !publicPaths.includes(nextUrl.pathname)
      ? NextResponse.redirect(url)
      : response
  }

  if (isTokenExpired && !isRefreshTokenExpired) {
    await handleRefreshToken(refreshToken)
      .then(({ token }) => {
        const decodedToken = decodeJwt(token)
        const tokenExpiration = decodedToken.exp
          ? new Date(decodedToken.exp * 1000)
          : undefined
        response.cookies.set({
          name: tokenKey,
          value: token,
          expires: tokenExpiration
        })
      })
      .catch(() => {
        const url = nextUrl.clone()
        url.pathname = '/auth/login'
        return !publicPaths.includes(nextUrl.pathname)
          ? NextResponse.redirect(url)
          : NextResponse.next()
      })
    return response
  }
}

export const config = {
  matcher: ['/((?!_next|api/auth).*)(.+)']
}
