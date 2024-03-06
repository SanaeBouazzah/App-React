import { Box, Button, Stack, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { useForm } from 'react-hook-form'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Header from "../../components/Header";
const data = [
  {
    value: 'Admin',
    label: 'Admin'
  },
  {
    value: 'Manger',
    label: 'Manger',
  },
  {
    value: 'User',
    label: 'User',
  },
];

const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;


export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = () => {
    handleClick();
  };
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Header title={"Create User"} subtitle={"Create a New User Profile"}/>
      <Box component="form" noValidate autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2, marginTop: "30px"
        }}>

        <Stack direction={'row'} sx={{ gap: 2 }}>
          <TextField sx={{ flex: 1 }} label="FirstName" variant="outlined"
            helperText={Boolean(errors.FirstName) ?
              "This Field is Required & Min 3 Character." : null}
            error={Boolean(errors.FirstName)}
            {...register('FirstName', { required: true, minLength: 3 })} />
          <TextField sx={{ flex: 1 }}
            helperText={Boolean(errors.LastName) ?
              "This Field is Required & Min 3 Character." : null}
            error={Boolean(errors.LastName)}
            {...register('LastName', { required: true, minLength: 3 })}
            label="LastName" variant="outlined" />
        </Stack>

        <TextField label="Email" variant="outlined"
          helperText={Boolean(errors.Email) ?
            "Please provide a valid email address like example@example.com " : null}
          error={Boolean(errors.Email)}
          {...register('Email', {
            required: true,
            pattern: regEmail
          })}
        />

        <TextField label="Contact Number" variant="outlined"
          helperText={Boolean(errors.ContactNumber) ?
            "Please provide a valid Phone Number like +XXXXX.. Ten Numbers." : null}
          error={Boolean(errors.ContactNumber)}
          {...register('ContactNumber', {
            required: true,
            pattern: regPhone
          })}
        />

        <TextField label="Address 1" variant="outlined" />
        <TextField label="Address 2" variant="outlined" />

        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
          helperText="Please select your Role"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button onClick={handleClick} type='submit' variant='contained' sx={{ textTransform: 'capitalize' }}>Create New User</Button>
        </Box>


        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Account created successfully!
          </Alert>
        </Snackbar>
      </Box>
    </div>
  )
}
