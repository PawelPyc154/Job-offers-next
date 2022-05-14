import { ReactNode } from 'react'

interface LabelProps {
  children: ReactNode
}
const Label = ({ children }: LabelProps) => (
  <label className="text-sm font-medium" htmlFor="todo">
    {children}
  </label>
)

export { Label }
