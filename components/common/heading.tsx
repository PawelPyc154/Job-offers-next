import { ReactNode } from 'react'
import clsx from 'clsx'
import { Tag } from './tag'

const sizes = {
  sm: 'text-xs 2xl:text-sm',
  base: 'text-sm 2xl:text-base',
  lg: 'text-base 2xl:text-lg',
  xl: 'text-lg 2xl:text-xl',
  '2xl': 'text-xl 2xl:text-2xl',
  '3xl': 'text-2xl 2xl:text-3xl',
}
interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: ReactNode
  className?: string
  size: keyof typeof sizes
}

const Heading = ({ tag, children, className, size, ...props }: HeadingProps) => (
  <Tag tag={tag} className={clsx('font-medium', sizes[size], className)} {...props}>
    {children}
  </Tag>
)

export { Heading }
