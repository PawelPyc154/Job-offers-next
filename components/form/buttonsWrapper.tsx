import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface ButtonsWrapperProps {
  children: ReactNode
  className?: string
}
const ButtonsWrapper = ({ children, className }: ButtonsWrapperProps) => <div className={clsx('flex gap-2', className)}>{children}</div>

export { ButtonsWrapper }
