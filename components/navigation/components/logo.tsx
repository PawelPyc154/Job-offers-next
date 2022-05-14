import clsx from 'clsx'
import React from 'react'

interface LogoProps {
  className?: string
}
const Logo = ({ className }: LogoProps) => (
  <div className={clsx('text-2xl xltext-3xl h-12 rounded-md px-4 items-center flex', 'hidden xl:flex', className)}>Logo</div>
)

export { Logo }
