import { DashboardLayout } from '@/layouts/dashboard'
import { NextPageWithLayout } from '@/types/next'

const Home: NextPageWithLayout = () => {
  return <div className="text-4xl">Home</div>
}

export default Home

Home.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
