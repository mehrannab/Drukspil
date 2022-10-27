import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Dispatch, SetStateAction, useEffect } from 'react';

const products = [
  {
    name: '1x Drukspil',
    desc: 'Brætspillet af selve drukspillet',
    price: '60 Kr',
  },
  { name: 'Forsendelse(Leveres via DAO)', price: '30 Kr' },
];

export interface ShippingProps {
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalcode: string;
    country: string;
}

export interface PaymentProps {
  cardname: string,
  cardnumber: string,
  expirydate: string,
  cvv: string,
}

interface Props {
  shipping: ShippingProps;
  payment: PaymentProps;
}

const Review = ({shipping, payment}: Props) => {

  useEffect(() => {
    console.log('test', shipping);
  }, [shipping, payment])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            90 Kr
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <p>{shipping?.firstname} {shipping?.lastname}</p>
          <p>{shipping?.address}, {shipping?.city}, {shipping?.state}</p>
          <p>{shipping?.postalcode}, {shipping?.country}</p>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <p>Cardholder: {payment?.cardname}</p>
          <p>Cardnumber: {payment?.cardnumber}</p>
          <p>Expiry date: {payment?.expirydate}</p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Review;