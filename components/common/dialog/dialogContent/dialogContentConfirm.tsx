/* eslint-disable react/jsx-no-undef */

import { MouseEventHandler } from 'react'
import { Button } from '../../../form/button'
import { ButtonsWrapper } from '../../../form/buttonsWrapper'
import { useDialogContext } from '../dialogProvider'

interface DialogContentConfirmProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  isLoading: boolean
}

const DialogContentConfirm = ({ onClick, isLoading }: DialogContentConfirmProps) => {
  const { setIsOpenDialog } = useDialogContext()
  return (
    <ButtonsWrapper className="justify-center">
      <Button onClick={() => setIsOpenDialog(false)} color="gray">
        Cancel
      </Button>
      <Button onClick={onClick} isLoading={isLoading}>
        Confirm
      </Button>
    </ButtonsWrapper>
  )
}

export { DialogContentConfirm }
