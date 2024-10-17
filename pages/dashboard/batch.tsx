import Head from 'next/head'
import { Fragment } from 'react'

import { BatchWrapper } from '@/features/batch'
import { DashboardLayout } from '@/layouts/dashboard'
import { NextPageWithLayout } from '@/types/next'

const Batch: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Batch</title>
      </Head>
      <BatchWrapper />
    </Fragment>
  )
}

export default Batch

Batch.getLayout = (page) => {
  return <DashboardLayout title="Batch">{page}</DashboardLayout>
}
