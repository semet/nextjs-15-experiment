import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { loginRequest } from '@/features/auth'
import { loginSchema, TLogin } from '@/schemas/auth'
import { handleToken } from '@/utils'

export const LoginForm = () => {
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLogin>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: loginRequest,
    onSuccess: (data) => {
      handleToken(data)
      push('/dashboard')
    }
  })

  const onSubmit = handleSubmit((data) => {
    mutate(data)
  })
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4"
    >
      <div className="relative flex flex-col gap-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          className="rounded"
          {...register('email')}
        />
        {errors.email && (
          <span className="absolute -bottom-[18px] left-1 text-xs text-rose-600">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="relative flex flex-col gap-4">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="rounded"
          {...register('password')}
        />
        {errors.password && (
          <span className="absolute -bottom-[18px] left-1 text-xs text-rose-600">
            {errors.password.message}
          </span>
        )}
      </div>
      <button
        className="mt-2 rounded bg-indigo-700 py-2 text-white"
        type="submit"
      >
        Login
      </button>
    </form>
  )
}
