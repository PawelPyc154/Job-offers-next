import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Input } from '../input'

type InputControlProps = {
  label?: string
  className?: string
}

const InputControl = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  rules,
  defaultValue,
  label,
  className,
}: InputControlProps & UseControllerProps<TFieldValues>) => {
  const {
    field,
    // fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  })
  //   console.log(error)
  return <Input className={className} label={label} {...field} />
}

export { InputControl }
