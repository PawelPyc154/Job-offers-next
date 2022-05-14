import { ReactNode } from 'react'
import { Heading } from '../heading'

interface MobilePropertyWrapperProps {
  children: ReactNode
  actionsSlot: ReactNode
  headingSlot: ReactNode
}
const MobilePropertyWrapper = ({ headingSlot, children, actionsSlot }: MobilePropertyWrapperProps) => (
  <div className="grid divide-y divide-gray-200 bg-white shadow-sm rounded-md">
    <Heading tag="h2" size="lg" className="py-2 px-3">
      {headingSlot}
    </Heading>
    <div className="grid grid-cols-2 gap-1 py-2 px-3">{children}</div>
    <div className="flex justify-center py-2">{actionsSlot}</div>
  </div>
)

export { MobilePropertyWrapper }
