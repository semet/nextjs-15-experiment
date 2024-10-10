import { z } from 'zod'

const profileSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  phone: z.string(),
  fullName: z.string(),
  role: z.string(),
  lastLogin: z.string().datetime().nullable(),
  profileUpdatedAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  departmentId: z.string().uuid().nullable(),
  batchId: z.string().uuid().nullable(),
  groupId: z.string().uuid()
})

export const dashboardSchema = z.object({
  message: z.string(),
  profile: profileSchema
})

export type DashboardData = z.infer<typeof dashboardSchema>
