import Head from 'next/head'
import { Fragment } from 'react'

import { PaginationProvider } from '@/contexts'
import { DepartmentWrapper } from '@/features/department'
import { DashboardLayout } from '@/layouts/dashboard'
import { NextPageWithLayout } from '@/types/next'

const Department: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Department</title>
      </Head>
      <PaginationProvider>
        <DepartmentWrapper />
      </PaginationProvider>
    </Fragment>
  )
}

export default Department

Department.getLayout = (page) => {
  return <DashboardLayout title="Department">{page}</DashboardLayout>
}
