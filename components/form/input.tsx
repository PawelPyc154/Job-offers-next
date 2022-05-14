import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { Label } from './label'

const colors = { white: `bg-white`, gray: `bg-white` }

type InputBaseProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputProps = InputBaseProps & {
  label?: string
  icon?: ReactNode
  className?: string
  color?: keyof typeof colors
}
const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, icon, color = 'gray', ...props }, ref) => (
  <div className={clsx('text-sm w-full', className)}>
    {label && <Label>{label}</Label>}
    <div className="relative">
      <input
        className={clsx(
          `bg-white rounded-md px-3 shadow-sm h-10 flex border border-gray-300 items-center w-full pb-px`,
          colors[color],
          !!icon && `pl-10`,
        )}
        ref={ref}
        {...props}
      />
      <div className="absolute text-xl h-10 px-3 flex justify-center items-center top-0 left-0">{icon}</div>
    </div>
  </div>
))

export { Input }
