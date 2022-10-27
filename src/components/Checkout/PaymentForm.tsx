import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Dispatch, SetStateAction } from 'react';
import { PaymentProps } from './Review';

interface Props {
  setpayment: Dispatch<SetStateAction<PaymentProps>>
  payment: PaymentProps;
}

const PaymentForm = ({payment, setpayment}: Props) => {

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpayment({
        ...payment,
        [e.target.name]: e.target.value
    });
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            name="cardname"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={payment.cardname}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardnumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={payment.cardnumber}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expirydate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={payment.expirydate}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={payment.cvv}
            onChange={updateField}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;