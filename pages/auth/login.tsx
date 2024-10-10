import Head from 'next/head'
import { Fragment } from 'react'

import { LoginForm } from '@/features/auth'
import { AuthLayout } from '@/layouts/auth'
import { NextPageWithLayout } from '@/types/next'

const Login: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </Fragment>
  )
}

export default Login

Login.getLayout = (page) => {
  return <AuthLayout title="Login Page">{page}</AuthLayout>
}
