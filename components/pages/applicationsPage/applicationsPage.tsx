import React from 'react'

import { createSelectColumn } from 'components/common/table/components/createSelectColumn'
import { MobilePropertyWrapper } from 'components/common/table/mobilePropertyWrapper'
import { MobileTableKeyValueRender } from 'components/common/table/mobileTableKeyValueRender'

import { tablePage, TablePage } from 'components/common/table/tablePage'
import { Tooltip } from 'components/common/tooltip'
import { ButtonsWrapper } from 'components/form/buttonsWrapper'
import { IconButton } from 'components/form/iconButton'
import { MdCheck, MdClose, MdOutlineDelete, MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'

interface Data {
  id: number
  status: 'new' | 'rejected' | 'accepted' | 'open'
  fullName: string
}
const data: Data[] = [
  {
    id: 1,
    fullName: 'Paweł Pyc',
    status: 'new',
  },
]

const table = tablePage.setRowType<Data>()

const columns = [
  createSelectColumn(table),
  table.createDataColumn('fullName', {
    header: () => 'Full name',
    meta: { justify: 'start', classNameThTd: '' },
    cell: ({ value }) => <div className="font-semibold">{value}</div>,
  }),

  table.createDataColumn('status', {
    meta: { classNameThTd: 'w-[11%]' },
    header: () => 'Status',
  }),

  table.createDataColumn('id', {
    header: () => '',
    enableSorting: false,
    meta: { justify: 'end', classNameThTd: 'w-0' },
    cell: () => (
      <ButtonsWrapper className="gap-3 xl:gap-2">
        <Tooltip content="Accept">
          <IconButton color="gray" size="md">
            <MdCheck size="22" />
          </IconButton>
        </Tooltip>
        <Tooltip content="Reject">
          <IconButton color="gray" size="md">
            <MdClose size="22" />
          </IconButton>
        </Tooltip>

        {true ? (
          <Tooltip content="Not marked">
            <IconButton color="gray" size="md">
              <MdOutlineStarBorder size="22" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip content="Mark">
            <IconButton color="gray" size="md">
              <MdOutlineStar />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip content="Remove">
          <IconButton color="gray" size="md">
            <MdOutlineDelete size="22" />
          </IconButton>
        </Tooltip>
      </ButtonsWrapper>
    ),
  }),
]

const ApplicationsPage = () => (
  <TablePage
    table={table}
    pageTitle="Applicatios - Programista React"
    columns={columns}
    data={data}
    totalItems={data.length}
    isLoading={false}
    actionsTopBar={<div> </div>}
    // eslint-disable-next-line react/no-unstable-nested-components
    mobileRender={({ fullName, status, id }) => (
      <MobilePropertyWrapper actionsSlot={id.cell} headingSlot={fullName.cell}>
        <MobileTableKeyValueRender property={status} />
      </MobilePropertyWrapper>
    )}
  />
)

export default ApplicationsPage
