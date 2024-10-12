import { setCookie } from 'cookies-next'
import { decodeJwt } from 'jose'

import { cookieKeys } from '@/configs'

import { handleToken } from './handle-token'
const { refreshTokenKey, tokenKey } = cookieKeys

jest.mock('jose', () => ({
  decodeJwt: jest.fn()
}))

jest.mock('cookies-next', () => ({
  getCookie: jest.fn(),
  setCookie: jest.fn()
}))

describe('handleToken', () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUwYjI3MzVmLTljZGItNDQzOC05MjBkLTJlN2M3MTJjYjFkMCIsImVtYWlsIjoiaGFtZGFuaWxvbWJva0BnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjg2MTYzNTksImV4cCI6MTczMTIwODM1OX0.rpW6ECclOHfvSDcJRkiDze6bJydscmYdpIDAncPmjs4'
  const refreshToken =
    'refreyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUwYjI3MzVmLTljZGItNDQzOC05MjBkLTJlN2M3MTJjYjFkMCIsImVtYWlsIjoiaGFtZGFuaWxvbWJva0BnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjg2MTYzNTksImV4cCI6MTczMTIwODM1OX0.rpW6ECclOHfvSDcJRkiDze6bJydscmYdpIDAncPmjs4eshToken'
  const params = { token, refreshToken }

  const decodedToken = { exp: 1697030400 } // Mock expiration time
  const decodedRefreshToken = { exp: 1697120400 } // Mock refresh expiration

  beforeEach(() => {
    jest.clearAllMocks()

    const decoderInstance = decodeJwt as jest.MockedFunction<typeof decodeJwt>
    decoderInstance.mockImplementation((token: string) => {
      if (token === params.token) return decodedToken
      if (token === params.refreshToken) return decodedRefreshToken
      return { exp: 0 } // Provide a default JWTPayload object
    })
  })

  it('should set the token and refresh token cookies with expiration when forceRefresh is true', () => {
    const expectedTokenExpiration = new Date(decodedToken.exp * 1000)
    const expectedRefreshTokenExpiration = new Date(
      decodedRefreshToken.exp * 1000
    )

    handleToken(params, true)

    expect(decodeJwt).toHaveBeenCalledWith(token)
    expect(decodeJwt).toHaveBeenCalledWith(refreshToken)

    // Check token cookie set with expiration
    expect(setCookie).toHaveBeenCalledWith(tokenKey, token, {
      sameSite: 'strict',
      expires: expectedTokenExpiration
    })

    // Check refresh token cookie set with expiration
    expect(setCookie).toHaveBeenCalledWith(refreshTokenKey, refreshToken, {
      sameSite: 'strict',
      expires: expectedRefreshTokenExpiration
    })
  })
})
