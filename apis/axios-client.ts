import axios, { AxiosResponse } from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import { decodeJwt } from 'jose'
import { toast } from 'react-toastify'

import { cookieKeys, locales, publicPaths } from '@/configs'

const { tokenKey, refreshTokenKey } = cookieKeys
const baseURL = process.env.NEXT_PUBLIC_API_URL

export const axiosClient = axios.create({
  baseURL
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let refreshTokenPromise: Promise<AxiosResponse<any, any>> | null = null

axiosClient.interceptors.request.use(
  async (config) => {
    // eslint-disable-next-line
    let token = getCookie(tokenKey)
    const refreshToken = getCookie(refreshTokenKey)
    // remove locale from the path
    const currentPath = window.location.pathname
      .split('/')
      .filter(
        (part, index) =>
          index !== 1 || !locales.includes(part as (typeof locales)[number])
      )
      .join('/')

    const isPublicPaths = publicPaths.includes(currentPath)

    if (isPublicPaths) {
      return config
    }

    const decodedToken = token ? decodeJwt(token) : null
    const decodedRefreshToken = refreshToken ? decodeJwt(refreshToken) : null
    const currentTime = Date.now() / 1000

    const tokenExpiration = decodedToken ? decodedToken.exp : null
    const refreshTokenExpiration = decodedRefreshToken
      ? decodedRefreshToken.exp
      : null

    const isTokenExpired = tokenExpiration
      ? tokenExpiration < currentTime
      : true

    const isRefreshTokenExpired = refreshTokenExpiration
      ? refreshTokenExpiration < currentTime
      : true

    if (isTokenExpired && isRefreshTokenExpired) {
      return Promise.reject('Tokens expired')
    }

    if (isTokenExpired && !isRefreshTokenExpired) {
      if (!refreshTokenPromise) {
        refreshTokenPromise = axios.post(
          'http://localhost:8000/admin/refresh-token',
          { refreshToken }
        )
      }

      const { data } = await refreshTokenPromise
      setCookie(tokenKey, data.token)
      token = data.token
      config.headers.Authorization = `Bearer ${token}`
      refreshTokenPromise = null
    } else {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const errorMessage = error.response.data.message || 'Something went wrong'
      toast.error(`Error: ${errorMessage}`)
    } else if (error.request) {
      toast.error('No response from the server')
    }
    return Promise.reject(error)
  }
)
