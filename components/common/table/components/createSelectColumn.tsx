import { Table } from '@tanstack/react-table'
import { IndeterminateCheckbox } from '../indeterminateCheckbox'
import { TableGenerics, TableData } from '../tablePage'

const createSelectColumn = <TTableData extends TableData, TTableGenerics extends TableGenerics<TTableData>>(table: Table<TTableGenerics>) =>
  table.createDisplayColumn({
    id: 'select',
    meta: { justify: 'start', classNameThTd: 'w-0' },
    enableSorting: false,
    header: ({ instance }) => (
      <IndeterminateCheckbox
        {...{
          checked: instance.getIsAllRowsSelected(),
          indeterminate: instance.getIsSomeRowsSelected(),
          onChange: instance.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  })

export { createSelectColumn }
