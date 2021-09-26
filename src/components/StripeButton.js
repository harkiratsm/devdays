import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import { BillContext } from '../App';
import { NotiContext } from '../pages/Checkout';
const useStyles = makeStyles((theme) => ({
  bt: {
    '&:hover': {
      backgroundColor: 'rgb(211,47,47)'
    },
    backgroundColor: 'rgb(211,47,47)',
    color: 'white',
    fontWeight: '550',
    height: '60px',
    borderRadius: '14px',
    fontSize: '16px'
  }
}));
export default function StripeButton() {
  const { total } = React.useContext(BillContext);
  const { setRes } = React.useContext(NotiContext);
  let classes = useStyles();
  const onToken = async (token) => {
    console.log(token);
    await axios
      .post('https://safe-wave-31703.herokuapp.com/payment', {
        token,

        total
      })

      .then((response) => {
        setRes(response.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  };

  // ...

  return (
    // ...
    <StripeCheckout
      name="Three Comma Co." // the pop-in header title
      description="Big Data Stuff" // the pop-in header subtitle
      image="https://i.pinimg.com/originals/0b/ef/59/0bef5922f018b08a2b068d8af84c6baa.jpg"
      label="Proceed to Pay"
      allowRememberMe
      ComponentClass="div"
      panelLabel="Give Money" // prepended to the amount in the bottom pay button
      amount={total * 100} // cents
      currency="INR"
      token={onToken}
      stripeKey="pk_test_51JBwZISCRKj2cyAdzxUUVPcdz0Y0Dltzl53O3pnV37YwiTn07CaD37DhaXuNJCOcj2yiYuRs5zzafcxQYdvJLEcg00j1acDoLm"
    >
      {' '}
      <Button
        variant="contained"
        className={classes.bt}
        fullWidth
        endIcon={<ChevronRightIcon />}
      >
        Add Payment Method
      </Button>
    </StripeCheckout>
  );
}
