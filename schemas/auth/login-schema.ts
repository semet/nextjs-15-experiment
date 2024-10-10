import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required'
    })
    .email({
      message: 'Invalid email address'
    }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters'
  })
})

export const loginResponse = z.object({
  token: z.string(),
  refreshToken: z.string()
})

export type TLogin = z.infer<typeof loginSchema>
export type TLoginResponse = z.infer<typeof loginResponse>
