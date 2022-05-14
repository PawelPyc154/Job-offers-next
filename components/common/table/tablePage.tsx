import React, { ReactNode } from 'react'
import { ColumnDef, createTable, getCoreRowModelSync, Render, SortingState, Table, useTableInstance } from '@tanstack/react-table'
import clsx from 'clsx'
import { ButtonsWrapper } from '../../form/buttonsWrapper'

import { Heading } from '../heading'
import { Pagination } from '../pagination'

import styles from './tablePage.module.css'
import { SortArrow } from './sortArrow'

const justifyVariants = {
  start: `justify-start`,
  center: `justify-center text-center`,
  end: `justify-end`,
}
type ColumnMeta = {
  className?: string
  classNameTh?: string
  classNameThTd?: string
  classNameTd?: string
  justify?: keyof typeof justifyVariants
}
export const tablePage = createTable().setColumnMetaType<ColumnMeta>()

export type TableData = { id: number }

export type TableGenerics<TTableData extends TableData> = {
  Renderer: Render
  Rendered: ReactNode | JSX.Element
  Row: TTableData
  ColumnMeta: ColumnMeta
}

interface TableProps<TTableData extends TableData, TTableGenerics extends TableGenerics<TTableData>> {
  table: Table<TTableGenerics>
  data: TTableData[]
  columns: ColumnDef<TTableGenerics>[]
  pageTitle: string
  totalItems: number | undefined
  isLoading: boolean
  actionsTopBar?: ReactNode
  mobileRender: (
    // eslint-disable-next-line no-unused-vars
    cells: Record<
      keyof TTableData,
      {
        cell: ReactNode
        header: ReactNode
      }
    >,
  ) => ReactNode
  // eslint-disable-next-line no-unused-vars
  actionsOnSelectedElementsRender?: (options: { ids: number[] }) => ReactNode
}

const TablePage = <TTableData extends TableData = TableData, TTableGenerics extends TableGenerics<TTableData> = TableGenerics<TTableData>>({
  table,
  data,
  columns,
  pageTitle,
  totalItems,
  isLoading,
  actionsOnSelectedElementsRender,
  mobileRender,
  actionsTopBar,
}: TableProps<TTableData, TTableGenerics>) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const instance = useTableInstance(table, {
    data,
    columns,
    state: {
      sorting,
    },
    manualSorting: true,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModelSync(),
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between relative items-center ">
        <Heading tag="h1" size="2xl">
          {pageTitle}
          <span className="text-xs ml-1 2xl:(text-sm ml-2)">{totalItems}</span>
        </Heading>
        <ButtonsWrapper>{actionsTopBar}</ButtonsWrapper>
      </div>

      <div className={clsx(styles.scrollbarBorder, `overflow-y-auto w-full flex-grow hidden xl:block`)}>
        <table className="w-full">
          <thead className="h-8 text-xs 2xl:text-sm sticky top-0 z-20 bg-gray-200">
            {instance.getHeaderGroups().map((headerGroup) => (
              <tr className="px-1" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const { column } = header
                  const { meta } = column
                  const justify = meta?.justify || 'center'
                  const isSorted = column.getIsSorted()

                  return (
                    <th key={header.id} colSpan={header.colSpan} className={clsx(meta?.classNameThTd, meta?.classNameTh)}>
                      {header.isPlaceholder ? null : (
                        <button
                          className={clsx(
                            'px-2 font-normal flex w-full',
                            justifyVariants[justify],
                            column.getCanSort() && 'cursor-pointer select-none',
                          )}
                          onClick={column.getToggleSortingHandler()}
                          type="button"
                          disabled={!column.getCanSort()}
                        >
                          {justify === 'end' && <SortArrow sortDirection={isSorted} />}

                          <span
                            className={clsx(
                              'mx-5 whitespace-nowrap',
                              justify === 'start' && `ml-0`,
                              justify === 'end' && `mr-0`,
                              justify === 'end' && isSorted && `ml-0`,
                              isSorted && `mr-0`,
                              !column.enableSorting && '!m-0',
                            )}
                          >
                            {header.renderHeader()}
                          </span>
                          {justify !== 'end' && <SortArrow sortDirection={isSorted} />}
                        </button>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody className="shadow-sm divide-y divide-gray-100">
            {instance.getRowModel().rows.map((row) => (
              <tr className="bg-white hover:bg-gray-50" key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const { column } = cell
                  const { meta } = column
                  const justify = meta?.justify || 'center'
                  return (
                    <td key={cell.id} className={clsx(meta?.classNameThTd, meta?.classNameTd)}>
                      <div className={clsx('flex px-2 py-2', justifyVariants[justify], meta?.className)}>{cell.renderCell()}</div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="gap-3 grid xl:hidden">
        {instance
          .getRowModel()
          .rows.map((row) =>
            mobileRender(
              Object.fromEntries(
                row
                  .getVisibleCells()
                  .map((item) => [
                    [item.column.id],
                    { header: instance.getHeader(item.column.id).renderHeader(), cell: item.renderCell() },
                  ]),
              ),
            ),
          )}
      </div>

      <div className={clsx('h-10 flex justify-end xl:justify-between', isLoading && `opacity-30 pointer-events-none`)}>
        {actionsOnSelectedElementsRender?.({
          ids: instance.getSelectedRowModel().flatRows.map(({ original }) => original?.id as number),
        })}
        <Pagination />
      </div>
    </div>
  )
}

export { TablePage }
