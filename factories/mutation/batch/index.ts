export const batchMutationKeys = {
  create: ['createBatch'] as const,
  update: (id: string) => ['updateBatch', id] as const,
  delete: (id: string) => ['deleteBatch', id] as const
}
