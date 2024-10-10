import { GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Fragment } from 'react'

import { Homepage } from '@/features/home'
import { DashboardLayout } from '@/layouts/dashboard'
import { NextPageWithLayout } from '@/types/next'

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Homepage />
    </Fragment>
  )
}

export default Home

Home.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export const getServerSideProps: GetStaticProps = async ({ locale }) => {
  if (!locale) {
    return {
      props: {}
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'dashboard']))
    }
  }
}
