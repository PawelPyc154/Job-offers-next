import { GoPlus } from 'react-icons/go'

import { DialogTrigger } from 'components/common/dialog/dialogTrigger'
import { IconButton } from 'components/form/iconButton'
import { Button } from 'components/form/button'
import { AddEditMyJobOfferForm } from './addEditMyJobOfferForm'

const AddEditMyJobOfferDialog = () => (
  <DialogTrigger
    title="Add job offer"
    trigger={
      <>
        <Button color="emerald" className="hidden xl:flex">
          Add
        </Button>

        <IconButton className="xl:hidden" color="emerald">
          <GoPlus size="20" />
        </IconButton>
      </>
    }
  >
    {() => <AddEditMyJobOfferForm />}
  </DialogTrigger>
)

export { AddEditMyJobOfferDialog }
