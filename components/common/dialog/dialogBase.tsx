import { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import clsx from 'clsx'
import { Heading } from '../heading'
import '@reach/dialog/styles.css'

const sizes = {
  xl: `xl:max-w-xl`,
  '2xl': `xl:max-w-2xl`,
  '3xl': `xl:max-w-3xl`,
  '4xl': `xl:max-w-4xl`,
}
export type DialogBaseSizes = keyof typeof sizes

interface DialogBaseProps {
  title: string
  size?: DialogBaseSizes
  onCloseDialog: () => void
  // eslint-disable-next-line no-unused-vars
  children: ReactNode
}
const DialogBase = ({ children, size = '2xl', title, onCloseDialog }: DialogBaseProps) => (
  <DialogOverlay className="z-50 p-4" onClick={onCloseDialog}>
    <DialogContent
      id="dialogContent"
      className={clsx('rounded-md !p-0 relative overflow-hidden w-full mt-12 xl:mt-20', sizes[size])}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <Heading className="border-b border-gray-200 py-2 pl-4 pr-4 relative bg-emerald-600 text-white" size="lg" tag="h1">
        {title}
        <button className="p-2 absolute right-1 top-1/2 -translate-y-1/2" color="gray" type="button" onClick={onCloseDialog}>
          <MdClose size="26" />
        </button>
      </Heading>
      <div className="p-4">{children}</div>
    </DialogContent>
  </DialogOverlay>
)

export { DialogBase }
