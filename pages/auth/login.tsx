import { LoginForm } from '@/features/auth'
import { AuthLayout } from '@/layouts/auth'
import { NextPageWithLayout } from '@/types/next'

const Login: NextPageWithLayout = () => {
  return <LoginForm />
}

export default Login

Login.getLayout = (page) => {
  return <AuthLayout title="Login Page">{page}</AuthLayout>
}
