/* eslint-disable react/button-has-type */
import clsx from 'clsx'
import React from 'react'

const colors = {
  white: `bg-white hover:bg-gray-100`,
  gray: `bg-gray-100 hover:bg-gray-200`,
  emerald: `bg-emerald-600 hover:bg-emerald-700 text-white`,
  red: `bg-red-600 hover:bg-red-700 text-white`,
}
const sizes = {
  base: `h-10 w-10`,
  md: `h-9 w-9`,
}

type IconButtonProps = Pick<JSX.IntrinsicElements['button'], 'children' | 'type' | 'onClick'> & {
  color?: keyof typeof colors
  size?: keyof typeof sizes
  className?: string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, type = 'button', size = 'base', color = 'white', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={clsx(`rounded-md transition-colors flex items-center justify-center flex-shrink-0`, colors[color], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  ),
)

export { IconButton }
