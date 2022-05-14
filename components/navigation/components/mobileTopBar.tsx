import { IconButton } from 'components/form/iconButton'
import React, { Dispatch, SetStateAction } from 'react'
import { MdMenu } from 'react-icons/md'
import { Logo } from './logo'

interface MobileTopBarProps {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}
const MobileTopBar = ({ setIsOpenMenu }: MobileTopBarProps) => (
  <div className="sticky top-0 w-full bg-white xl:hidden p-4 py-1 z-40 flex items-center shadow-sm">
    <IconButton color="emerald" onClick={() => setIsOpenMenu((prev) => !prev)}>
      <MdMenu size={23} />
    </IconButton>
    <Logo />
  </div>
)

export { MobileTopBar }
