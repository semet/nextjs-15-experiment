import { Card } from '@/components/ui'
import { DepartmentToolbar } from '@/features/department'

export const DepartmentWrapper = () => {
  return (
    <Card header={<DepartmentToolbar />}>
      <div>Content</div>
    </Card>
  )
}
