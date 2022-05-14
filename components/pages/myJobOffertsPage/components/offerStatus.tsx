import clsx from 'clsx'

const statuses = {
  active: 'Aktywna',
  draft: 'Draft',
  closed: 'Closed',
  banned: 'Banned',
}
const colors = {
  active: `text-emerald-600`,
  draft: ``,
  closed: ``,
  banned: `text-red-600`,
}
export type OfferStatuses = keyof typeof statuses

interface OfferStatusProps {
  status: OfferStatuses
}
const OfferStatus = ({ status }: OfferStatusProps) => <div className={clsx(`font-medium`, colors[status])}>{statuses[status]}</div>

export { OfferStatus }
