export const homeKey = {
  home: ['homepage-data'] as const,
  dashboard: ['dashboard-data'] as const,
  user: (id: number) => ['user', id] as const
}
