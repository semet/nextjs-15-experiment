export const departmentKey = {
  departmentList: ['department-list'] as const,
  departmentFilter: ['department-filter'] as const,
  departmentCreate: ['department-create'] as const,
  departmentUpdate: ['department-update'] as const,
  departmentDelete: ['department-delete'] as const,
  departmentDetail: (id: number) => ['department', id] as const
}
