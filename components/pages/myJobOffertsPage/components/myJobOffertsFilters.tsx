// import { DialogContentForm } from 'components/common/dialog/dialogContent/dialogContentForm'
import { DialogFilters } from 'components/common/dialog/dialogs/dialogFilters'
// import { InputControl } from 'components/form/controls/inputControl'

const defaultFiltersValues = { title: '', test: '' }

const MyJobOffertsFilters = () => (
  <DialogFilters defaultFiltersValues={defaultFiltersValues}>
    <FilterForm />
  </DialogFilters>
)

// interface FormFiltersValues {
//   title: string
//   test: string
// }

const FilterForm = () => {
  // const { formProps, control } = useFormQueryParams<FormFiltersValues>()
  console.log('rs')
  return (
    <div>test</div>
    // <DialogContentForm {...formProps} className="grid-cols-2">
    //   <InputControl control={control} name="title" label="Title" />
    //   <InputControl control={control} name="test" label="Title" />
    // </DialogContentForm>
  )
}

export { MyJobOffertsFilters }
