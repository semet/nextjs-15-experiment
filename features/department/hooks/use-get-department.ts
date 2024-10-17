import { useQuery } from '@tanstack/react-query'

import { departmentKey } from '@/factories/query'
import { getDepartment } from '@/features/department'

export const useGetDepartment = () => {
  return useQuery({
    queryKey: departmentKey.departmentList,
    queryFn: ({ signal }) => getDepartment({ signal })
  })
}

export const useDepartmentOptions = () => {
  const { data } = useGetDepartment()
  return (
    data?.data.map((department) => ({
      label: department.name,
      value: department.id
    })) ?? []
  )
}
