import { Card } from '@/components/ui'
import { TableProvider } from '@/contexts'
import { BatchTable, BatchToolbar } from '@/features/batch'
import { TBatchFilter } from '@/schemas/batch'

import { initialFilter } from './data'

export const BatchWrapper = () => {
  return (
    <TableProvider<TBatchFilter> initialFilter={initialFilter}>
      <Card header={<BatchToolbar />}>
        <BatchTable />
      </Card>
    </TableProvider>
  )
}
