import { Avatar } from 'components/common/avatar'
import React from 'react'

const User = () => (
  <div className="grid gap-2">
    <div className="grid grid-flow-col justify-start gap-4 items-center px-4">
      <Avatar />
      Paweł Pyc
    </div>
  </div>
)

export { User }
