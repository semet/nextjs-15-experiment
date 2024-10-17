import Head from 'next/head'
import { Fragment } from 'react'

import { TableProvider } from '@/contexts'
import { DepartmentWrapper } from '@/features/department'
import { DashboardLayout } from '@/layouts/dashboard'
import { NextPageWithLayout } from '@/types/next'

const Department: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Department</title>
      </Head>
      <TableProvider>
        <DepartmentWrapper />
      </TableProvider>
    </Fragment>
  )
}

export default Department

Department.getLayout = (page) => {
  return <DashboardLayout title="Department">{page}</DashboardLayout>
}
