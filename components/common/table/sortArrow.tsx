import { SortDirection } from '@tanstack/react-table'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'

interface SortArrowProps {
  sortDirection: SortDirection | false
}
const SortArrow = ({ sortDirection }: SortArrowProps) => {
  switch (sortDirection) {
    case 'asc':
      return <MdOutlineArrowDropUp className="text-xl flex-shrink-0" />
    case 'desc':
      return <MdOutlineArrowDropDown className="text-xl flex-shrink-0" />
    case false:
    default:
      return null
  }
}

export { SortArrow }
