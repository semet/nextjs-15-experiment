export const batchMutationKeys = {
  update: (id: string) => ['updateBatch', id] as const
}
