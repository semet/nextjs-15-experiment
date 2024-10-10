import { useQuery } from '@tanstack/react-query'

import { homeKey } from '@/factories/query'
import { getHomepageDataRequest } from '@/features/home'
import { DashboardData } from '@/schemas/home'

export const useHomepageData = () => {
  return useQuery<DashboardData>({
    queryKey: homeKey.home,
    queryFn: ({ signal }) => getHomepageDataRequest({ signal }),
    gcTime: 0
  })
}
