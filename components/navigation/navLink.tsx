import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface NavLinkProps {
  href: string
  children: string
}
const NavLink = ({ href, children }: NavLinkProps) => {
  const { pathname } = useRouter()

  return (
    <Link href={href} passHref>
      <a
        className={clsx('rounded-md px-2 py-2 hover:bg-gray-100 transition-colors', {
          'bg-gray-100 pointer-events-none': pathname === href,
        })}
      >
        {children}
      </a>
    </Link>
  )
}

export { NavLink }
