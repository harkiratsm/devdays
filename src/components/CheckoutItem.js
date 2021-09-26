import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import { Box, ListItem, Typography } from '@material-ui/core';

import { BillContext, CartContext } from '../App';
const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 'auto'
  },
  button: {
    '&:hover': {
      backgroundColor: 'white'
    },

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'red',
    fontWeight: '750',
    border: '1px solid red',
    borderRadius: '18px',
    marginRight: '10px',
    marginTop: '-27px'
  },
  img: {
    height: '130px',
    widht: '150px',
    marginBottom: theme.spacing(2),
    position: 'relative',
    marginRight: '8px',
    borderRadius: '18px'
  },
  button1: {
    '&:hover': {
      backgroundColor: 'white'
    },
    borderRadius: '18px',
    border: 'none',
    color: 'red',
    fontWeight: '750',
    backgroundColor: 'white'
  }
}));
function CheckoutItem({ info }) {
  const classes = useStyles();
  const [num, setNum] = React.useState(info.key === undefined ? 1 : info.key);
  const { setTotal } = React.useContext(BillContext);
  const { cart, setCart } = React.useContext(CartContext);

  const handleclick = React.useCallback(
    (event, price) => {
      setTotal((prev) => prev + price);
      setNum(num + 1);
      if (cart.indexOf(info) === -1) {
        setCart((state) => [...state, info]);
      }
    },
    [num, cart, info, setTotal, setNum, setCart]
  );
  const handlemin = (event, price) => {
    setTotal((prev) => prev - price);

    setNum(num - 1);
  };
  React.useEffect(() => {
    var a = cart.indexOf(info);
    cart[a].key = num;
  }, [handleclick, cart, num, info]);
  React.useEffect(() => {
    console.log(cart);
    console.log(num);
  }, [cart, num]);
  return (
    <>
      {info.key >= 1 ? (
        <Box className={classes.root}>
          <ListItem>
            <ListItemText
              primary={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {info.isVeg ? (
                    <img
                      style={{ height: '20px', marginRight: '10px' }}
                      alt="veg"
                      src="https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png"
                    ></img>
                  ) : (
                    <img
                      style={{ height: '20px', marginRight: '10px' }}
                      alt="nonveg"
                      src="https://freesvg.org/img/1531813245.png"
                    ></img>
                  )}
                  <Typography component="h5" style={{ fontWeight: 550 }}>
                    {info.name}
                  </Typography>
                </div>
              }
              secondary={
                <>
                  <Typography
                    component="span"
                    style={{ color: 'black', fontWeight: 550 }}
                  >
                    ₹{info.price}
                  </Typography>
                </>
              }
            ></ListItemText>
          </ListItem>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            <ButtonGroup className={classes.button}>
              <Button
                className={classes.button1}
                onClick={(event) => handlemin(event, info.price)}
              >
                -
              </Button>
              <Button className={classes.button1} style={{ color: 'black' }}>
                {info.key > 0 ? num : 1}
              </Button>
              <Button
                className={classes.button1}
                onClick={(event) => handleclick(event, info.price)}
              >
                {' '}
                +
              </Button>
            </ButtonGroup>
          </div>
        </Box>
      ) : null}
    </>
  );
}

export default CheckoutItem;
