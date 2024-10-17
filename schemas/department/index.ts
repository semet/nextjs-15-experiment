import { z } from 'zod'

export const departmentFilter = z.object({})

export const departmentResponse = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      name: z.string()
    })
  )
})

export type TDepartmentResponse = z.infer<typeof departmentResponse>

export type TDepartmentFilter = z.infer<typeof departmentFilter>
