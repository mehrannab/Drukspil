import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review, { PaymentProps, ShippingProps } from './Review';
import { useState } from 'react';


const steps = ['Shipping address', 'Payment details', 'Review your order'];

const theme = createTheme();

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [shipping, setShipping] = useState<ShippingProps>({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalcode: "",
    country: "",
})
  const [payment, setPayment] = useState<PaymentProps>({
    cardname: "",
    cardnumber: "",
    expirydate: "",
    cvv: "",
})

var orderNumber: number = Math.floor((Math.random() * 100000000) + 1);

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm setshipping={setShipping} shipping={shipping} />;
    case 1:
      return <PaymentForm setpayment={setPayment} payment={payment}/>;
    case 2:
      return <Review payment={payment} shipping={shipping}/>;
    default:
      throw new Error('Unknown step');
  }
}

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is {orderNumber}. We have emailed your order
                  confirmation to {shipping.email}, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Checkout;