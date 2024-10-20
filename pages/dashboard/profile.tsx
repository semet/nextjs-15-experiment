import Head from 'next/head'
import { Fragment } from 'react'

import { ProfileWrapper } from '@/features/profile'
import { DashboardLayout } from '@/layouts/dashboard'
import { NextPageWithLayout } from '@/types/next'

const Profile: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileWrapper />
    </Fragment>
  )
}

export default Profile

Profile.getLayout = (page) => {
  return <DashboardLayout title="Profile">{page}</DashboardLayout>
}
