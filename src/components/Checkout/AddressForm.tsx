import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, createContext, Dispatch, SetStateAction } from 'react';
import PaymentForm from './PaymentForm';
import Review, { ShippingProps } from './Review';
import "../../pages/pagesStyles/checkout.css";


interface Props {
  setshipping: Dispatch<SetStateAction<ShippingProps>>
  shipping: ShippingProps;
}

const AddressForm = ({shipping, setshipping}: Props) => {
  
    const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setshipping({
            ...shipping,
            [e.target.name]: e.target.value
        });
    }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={shipping.firstname}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={shipping.lastname}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="shipping email-line1"
            variant="standard"
            value={shipping.email}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={shipping.address}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={shipping.city}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={shipping.state}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postalcode"
            name="postalcode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={shipping.postalcode}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={shipping.country}
            onChange={updateField}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;