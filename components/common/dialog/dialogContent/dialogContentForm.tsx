import { FormEventHandler, ReactNode } from 'react'
import clsx from 'clsx'
import { Button } from '../../../form/button'
import { useDialogContext } from '../dialogProvider'
import { ButtonsWrapper } from '../../../form/buttonsWrapper'

interface DialogContentFormProps {
  className?: string
  isLoading?: boolean
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
  onReset?: FormEventHandler<HTMLFormElement>
}

const DialogContentForm = ({ children, onSubmit, isLoading, className, onReset }: DialogContentFormProps) => {
  const { setIsOpenDialog } = useDialogContext()

  return (
    <form className="grid gap-6" onSubmit={onSubmit} onReset={onReset}>
      <div className={clsx('grid gap-4', className)}>{children}</div>
      <ButtonsWrapper className="justify-center">
        <Button color="gray" onClick={() => setIsOpenDialog(false)}>
          Close
        </Button>
        {!!onReset && (
          <Button type="reset" color="gray">
            Reset
          </Button>
        )}
        <Button type="submit" isLoading={isLoading}>
          Filter
        </Button>
      </ButtonsWrapper>
    </form>
  )
}

export { DialogContentForm }
