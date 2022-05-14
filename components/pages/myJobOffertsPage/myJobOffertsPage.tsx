import { createSelectColumn } from 'components/common/table/components/createSelectColumn'
import { MobilePropertyWrapper } from 'components/common/table/mobilePropertyWrapper'
import { MobileTableKeyValueRender } from 'components/common/table/mobileTableKeyValueRender'

import { tablePage, TablePage } from 'components/common/table/tablePage'
import { Tooltip } from 'components/common/tooltip'
import { Button } from 'components/form/button'
import { ButtonsWrapper } from 'components/form/buttonsWrapper'
import { IconButton } from 'components/form/iconButton'
import Link from 'next/link'
import { CgCloseO } from 'react-icons/cg'
import { GoPlus } from 'react-icons/go'
import { MdEdit, MdOutlineDelete, MdPublishedWithChanges } from 'react-icons/md'
import { OfferStatus } from './components/offerStatus'
import { data, Data } from './data'

const table = tablePage.setRowType<Data>()

const columns = [
  createSelectColumn(table),
  table.createDataColumn('title', {
    header: () => 'Title',
    meta: { justify: 'start', classNameThTd: '' },
    cell: ({ value }) => <div className="font-semibold">{value}</div>,
  }),
  table.createDataColumn('applications', {
    header: () => 'Applications',
    meta: { classNameThTd: 'w-[11%]' },
    cell: ({ value, row }) => (
      <Link href={`/employer/applications/${row.original?.id}`} passHref>
        <a className="underline"> {value}</a>
      </Link>
    ),
  }),
  table.createDataColumn('views', {
    meta: { classNameThTd: 'w-[11%]' },
    header: () => 'Views',
  }),
  table.createDataColumn('status', {
    meta: { classNameThTd: 'w-[11%]' },
    header: () => 'Status',
    cell: ({ value }) => <OfferStatus status={value} />,
  }),
  table.createDataColumn('publishedAt', {
    meta: { classNameThTd: 'w-[11%]' },
    header: () => 'Published at',
  }),
  table.createDataColumn('expirationAt', {
    meta: { classNameThTd: 'w-[11%]' },
    header: () => 'Expiration at',
  }),
  table.createDataColumn('id', {
    header: () => '',
    enableSorting: false,
    meta: { justify: 'end', classNameThTd: 'w-0' },
    cell: () => (
      <ButtonsWrapper>
        <Tooltip content="Publish">
          <IconButton color="gray" size="md">
            <MdPublishedWithChanges size="22" />
          </IconButton>
        </Tooltip>

        {/* <Tooltip content="Promote">
          <IconButton color="gray" size="md">
            <MdOutlineVerified size="22" />
          </IconButton>
        </Tooltip> */}
        {/* <Tooltip content="Duplicate">
          <IconButton color="gray" size="md">
            <HiOutlineDuplicate size="22" />
          </IconButton>
        </Tooltip> */}

        <Tooltip content="Edit">
          <IconButton color="gray" size="md">
            <MdEdit size="22" />
          </IconButton>
        </Tooltip>

        <Tooltip content="Close">
          <IconButton color="gray" size="md">
            <CgCloseO size="21" />
          </IconButton>
        </Tooltip>

        <Tooltip content="Remove">
          <IconButton color="gray" size="md">
            <MdOutlineDelete size="22" />
          </IconButton>
        </Tooltip>
      </ButtonsWrapper>
    ),
  }),
]

const MyJobOffertsPage = () => (
  <TablePage
    table={table}
    pageTitle="Moje oferty pracy"
    columns={columns}
    data={data}
    totalItems={data.length}
    isLoading={false}
    actionsTopBar={
      <>
        {/* <AddEditMyJobOfferDialog /> */}

        <Link href="/employer/my-job-offers/add" passHref>
          <a href="">
            <Button color="emerald" className="hidden xl:flex">
              Add
            </Button>
            <IconButton className="xl:hidden" color="emerald">
              <GoPlus size="20" />
            </IconButton>
          </a>
        </Link>

        {/* <InputSearch className="hidden xl:block" /> */}
        {/* <MyJobOffertsFilters /> */}
        {/* <Tooltip content="Help">
          <IconButton>
            <MdHelpOutline size="22" />
          </IconButton>
        </Tooltip> */}
      </>
    }
    // eslint-disable-next-line react/no-unstable-nested-components

    // eslint-disable-next-line react/no-unstable-nested-components
    mobileRender={({ title, status, id, applications, views, expirationAt, publishedAt }) => (
      <MobilePropertyWrapper actionsSlot={id.cell} headingSlot={title.cell}>
        <MobileTableKeyValueRender property={status} />
        <MobileTableKeyValueRender property={applications} />
        <MobileTableKeyValueRender property={views} />
        <MobileTableKeyValueRender property={expirationAt} />
        <MobileTableKeyValueRender property={publishedAt} />
      </MobilePropertyWrapper>
    )}
  />
)

export default MyJobOffertsPage
