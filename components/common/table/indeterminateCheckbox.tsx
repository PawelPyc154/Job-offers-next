/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx'
import React, { useEffect, useRef } from 'react'
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank, MdOutlineIndeterminateCheckBox } from 'react-icons/md'

const IndeterminateCheckbox = ({
  checked,
  indeterminate,
  onChange,
}: {
  indeterminate?: boolean
  checked: boolean
  // eslint-disable-next-line no-unused-vars
  onChange: (event: unknown) => void
}) => {
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = indeterminate
    }
  }, [ref, indeterminate])

  return (
    <label className={clsx('relative text-[22px] 2xl:text-2xl text-emerald-600 hover:text-emerald-700 select-none cursor-pointer')}>
      <input className="absolute inset-0 invisible" type="checkbox" ref={ref} checked={checked} onChange={onChange} />
      {!checked && (indeterminate ? <MdOutlineIndeterminateCheckBox /> : <MdOutlineCheckBoxOutlineBlank />)}
      {checked && <MdCheckBox />}
    </label>
  )
}

export { IndeterminateCheckbox }
