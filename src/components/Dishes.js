import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Box, Button, ListItem, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';

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

    marginTop: '-27px'
  },
  img: {
    height: '130px',
    widht: '150px',
    marginBottom: theme.spacing(2),
    position: 'relative',
    marginRight: '8px',
    borderRadius: '18px'
  }
}));
//

function Dishes({ info }) {
  const { setTotal } = React.useContext(BillContext);
  const { cart, setCart } = React.useContext(CartContext);
  const num = React.useRef(
    cart[cart?.indexOf(info)]?.key === undefined
      ? 1
      : cart[cart?.indexOf(info)]?.key
  );
  let classes = useStyles();

  const handleClick = (event, price) => {
    setTotal((prev) => prev + price);
    num.current++;

    if (cart.indexOf(info) === -1) {
      setCart((state) => [...state, info]);
    } else {
      var a = cart.indexOf(info);
      cart[a].key = num.current;
    }
  };

  return (
    <>
      <Divider style={{ marginTop: '8px', marginBottom: '8px' }}></Divider>
      <Box className={classes.root}>
        <ListItem>
          <ListItemText
            primary={
              <>
                {info.isVeg ? (
                  <img
                    style={{ height: '20px' }}
                    alt="veg"
                    src="https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png"
                  ></img>
                ) : (
                  <img
                    style={{ height: '20px' }}
                    alt="nonveg"
                    src="https://freesvg.org/img/1531813245.png"
                  ></img>
                )}
                <Typography component="h5" style={{ fontWeight: 650 }}>
                  {info.name}
                </Typography>
              </>
            }
            secondary={
              <>
                <Typography
                  component="span"
                  color="textSecondary"
                  style={{ color: 'black', fontWeight: 450 }}
                >
                  in Snacks
                </Typography>
                <br></br>
                <Typography
                  component="span"
                  style={{ color: 'black', fontWeight: 600 }}
                >
                  ₹{info.price}
                </Typography>
                <Typography
                  style={{ display: 'flex', color: 'black' }}
                  component="span"
                >
                  {Array(info.reviewStars)
                    .fill()
                    ?.map((_, i) => {
                      return <b key={i}>⭐</b>;
                    })}
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
          <img
            className={classes.img}
            alt="foodimage"
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          ></img>
          <Button
            variant="contained"
            className={classes.button}
            endIcon={<Add />}
            onClick={(event) => handleClick(event, info.price)}
          >
            Add
          </Button>
        </div>
      </Box>
    </>
  );
}

export default Dishes;
