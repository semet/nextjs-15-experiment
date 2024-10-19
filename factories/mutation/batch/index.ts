export const batchMutationKeys = {
  update: (id: string) => ['updateBatch', id] as const,
  delete: (id: string) => ['deleteBatch', id] as const
}
