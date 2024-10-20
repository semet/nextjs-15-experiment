import { z } from 'zod'

import { responseMeta } from '@/schemas/common'
import { TQueryParams } from '@/types/request'

export const batchFilter = z.object({
  department: z.object(
    {
      label: z.string(),
      value: z.string()
    },
    {
      message: 'Department is required'
    }
  )
})

export const batchResponse = z
  .object({
    data: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        alias: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        departmentId: z.string()
      })
    )
  })
  .merge(responseMeta)

export const createBatch = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  alias: z.string().min(1, { message: 'Alias is required' }),
  departmentId: z
    .object({
      label: z.string(),
      value: z.string()
    })
    .refine((val) => val.value, {
      message: 'Department is required'
    })
})

export const editBatch = createBatch.merge(
  z.object({
    id: z.string()
  })
)

export type TBatchResponse = z.infer<typeof batchResponse>

export type TBatch = TBatchResponse['data'][0]

export type TBatchFilter = z.infer<typeof batchFilter>

export type TBatchQueryParams = TQueryParams<TBatchFilter>

export type TCreateBatch = z.infer<typeof createBatch>

export type TEditBatch = z.infer<typeof editBatch>

export type TDeleteBatch = {
  id: string
}
