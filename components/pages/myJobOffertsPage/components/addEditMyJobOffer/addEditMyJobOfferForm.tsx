import { useForm } from 'react-hook-form'
import { DialogContentForm } from 'components/common/dialog/dialogContent/dialogContentForm'
import { InputControl } from 'components/form/controls/inputControl'

interface FormValues {
  title: string
  test: string
}

const AddEditMyJobOfferForm = () => {
  const { control, handleSubmit } = useForm<FormValues>()
  const onSubmit = () => {}
  return (
    <DialogContentForm onSubmit={handleSubmit(onSubmit)} className="grid-cols-2">
      <InputControl control={control} name="title" label="Title" />
      <InputControl control={control} name="test" label="Title" />
    </DialogContentForm>
  )
}

export { AddEditMyJobOfferForm }
