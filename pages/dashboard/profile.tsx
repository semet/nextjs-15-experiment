import Head from 'next/head'
import React, { Fragment } from 'react'

import { ProfileWrapper } from '@/features/profile'
import { DashboardLayout } from '@/layouts/dashboard'
import { NextPageWithLayout } from '@/types/next'

const Profile: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <ProfileWrapper />
    </Fragment>
  )
}

export default Profile

Profile.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
