import { z } from 'zod'

export const responseMeta = z.object({
  meta: z.object({
    isFirstPage: z.boolean(),
    isLastPage: z.boolean(),
    currentPage: z.number(),
    previousPage: z.nullable(z.number()),
    nextPage: z.nullable(z.number()),
    pageCount: z.number(),
    totalCount: z.number()
  })
})
