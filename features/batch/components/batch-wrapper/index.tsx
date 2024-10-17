import { Card } from '@/components/ui'
import { TableProvider } from '@/contexts'
import { BatchTable, BatchToolbar } from '@/features/batch'

export const BatchWrapper = () => {
  return (
    <TableProvider
      initialFilter={{
        department: {
          label: '',
          value: ''
        }
      }}
    >
      <Card header={<BatchToolbar />}>
        <BatchTable />
      </Card>
    </TableProvider>
  )
}
