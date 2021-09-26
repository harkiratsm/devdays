import React from 'react';
// import {useHistory} from 'react-router-dom'
import CheckoutItem from '../components/CheckoutItem';
import { CartContext } from '../App';
import Divider from '@material-ui/core/Divider';

import Link from '@material-ui/core/Link';
import axios from 'axios';
import { ListItem, ListItemText, Typography } from '@material-ui/core';

import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TotalBill from '../components/TotalBill';
import StripeButton from '../components/StripeButton';
import verify from '../static/2.png';
import { MenuContext, BillContext } from '../App';
import { useSnackbar } from 'notistack';
import { Redirect } from 'react-router';

let NotiContext = React.createContext();

function Checkout() {
  // let history=useHistory()
  let { menudata } = React.useContext(MenuContext);
  let { total, setTotal } = React.useContext(BillContext);
  const [res, setRes] = React.useState();
  let { cart, setCart } = React.useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();
  let renderitem = cart.map((i, index) => {
    return <CheckoutItem info={i} key={index} />;
  });
  const starter = [
    {
      icon: <WatchLaterIcon style={{ color: 'green' }} />,
      text: 'at',
      text2: 'Rajpura'
    },
    {
      icon: <LocationOnIcon style={{ color: 'green' }} />,
      text: 'in',
      text2: '35 min'
    }
  ];
  React.useEffect(() => {
    if (res === 'Success') {
      enqueueSnackbar('Your Order Has Been Placed', {
        variant: 'warning',
        persist: false
      });
      async function fetchitems() {
        // /restaurant
        await axios
          .post('https://safe-wave-31703.herokuapp.com/order', {
            bill: total,
            dishes: cart,
            restaurant: {
              name: menudata.name,
              address: menudata.address,
              phoneno: menudata.phoneno,
              rating: menudata.rating,
              menu: menudata.menu,
              onlineorder: menudata.onlineorder,
              photo: menudata.photo
            }
          })
          .then((res) => {
            console.log('Success');
          })
          .catch((error) => {
            console.log(error);
          });
      }
      fetchitems();
    }
  }, [res, enqueueSnackbar, cart, menudata, total, setTotal, setCart]);
  React.useEffect(() => {
    setTimeout(() => {
      if (res === 'Success') {
        setTotal(0);
        setCart([]);
        setRes('');
      }
    }, 3000);
  }, [res, setTotal, setCart]);
  return res !== 'Success' ? (
    <NotiContext.Provider value={{ res, setRes }}>
      <div style={{ overflowY: 'scroll', height: '100%' }}>
        {starter.map((i, index) => {
          return (
            <div key={index}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {i.icon}
                <span>
                  Delivery {i.text}{' '}
                  <span style={{ fontWeight: '550' }}>{i.text2}</span>
                </span>
              </div>
              <Divider style={{ marginTop: '8px', marginBottom: '8px' }} />
            </div>
          );
        })}

        {renderitem}
        <Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

        <ListItem>
          <ListItemText
            style={{ fontWeight: '550' }}
            display="flex"
            flexdirection="column"
            alignitems="center"
          >
            <Typography
              variant="h5"
              component="p"
              style={{ fontWeight: '500', color: 'black' }}
            >
              Offers
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}
            >
              <div style={{ display: 'flex' }}>
                <img
                  src={verify}
                  style={{ height: '25px', backgroundColor: 'inherit' }}
                  alt="discount"
                ></img>
                <Typography variant="overline" display="block" gutterBottom>
                  Select a promo code
                </Typography>
              </div>
              <Typography>
                <Link
                  href="#"
                  style={{ color: 'rgb(211,47,47)' }}
                  underline="none"
                >
                  View Offers
                </Link>
              </Typography>
            </div>
          </ListItemText>
        </ListItem>
        <Divider style={{ marginTop: '8px', marginBottom: '8px' }} />
        <TotalBill></TotalBill>
        <Divider style={{ marginTop: '8px', marginBottom: '8px' }} />
        <StripeButton />
      </div>
    </NotiContext.Provider>
  ) : (
    <Redirect to="/"></Redirect>
  );
}

export { Checkout, NotiContext };
