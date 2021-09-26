import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { List, ListItem } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {
  faArrowDown,
  faFireAlt,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import { BillContext, ResContext } from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column'
  },
  btn: {
    '&:hover': {
      backgroundColor: 'white'
    },
    display: 'flex',
    width: '100px',
    backgroundColor: 'white',
    borderRadius: '15px',
    fontSize: '11px',
    fontWeight: '530'
  },
  cart: {
    backgroundColor: '#D32F2F',
    width: '100%',

    color: '#fff',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '18px',
    height: '30px'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  let { total } = useContext(BillContext);
  let { newdata, setNewdata } = useContext(ResContext);
  const handleclick = () => {
    newdata.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    setNewdata(newdata);
    history.push('/home/rating4');
  };
  const popular = () => {
    newdata.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    setNewdata(newdata);
    history.push('/home/popular');
  };
  const cuisines = () => {
    newdata.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    setNewdata(newdata);
    history.push('/home/cusinies');
  };
  const buttoninfo = [
    {
      text: 'Cuisines',
      icon: true,
      iconfa: faArrowDown,
      color: 'black',
      click: true,
      clickid: cuisines
    },
    { text: 'Rating4.0+', icon: false, click: true, clickid: handleclick },
    { text: 'FastDelivery', icon: false },
    {
      text: 'Popular',
      icon: true,
      iconfa: faFireAlt,
      color: 'red',
      click: true,
      clickid: popular
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: 'white' }}
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <div
            style={{
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '5px',
              marginTop: '3px'
            }}
          >
            <FontAwesomeIcon
              icon={faMapMarkedAlt}
              size="lg"
              style={{ color: '#D32F2F' }}
              onClick={() => history.push('/map')}
            />
            <Typography
              component="h2"
              style={{
                borderBottom: '2px solid black',
                borderBottomStyle: 'dashed',
                marginLeft: '10px',
                fontSize: '25px',
                fontWeight: '600'
              }}
            >
              Pickup - NH 7, Rajpura
            </Typography>
          </div>

          <OutlinedInput
            placeholder="Restaurant name, cuisine or a dish"
            inputProps={{ 'aria-label': 'description' }}
            fullWidth
            margin="none"
            style={{ borderRadius: '22px' }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#D32F2F' }} />
              </InputAdornment>
            }
            variant="filled"
          />
          <List
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {buttoninfo.map((i, index) => {
              return (
                <ListItem key={index}>
                  <Button
                    variant="contained"
                    className={classes.btn}
                    onClick={i.click ? i.clickid : null}
                    endIcon={
                      i.icon ? (
                        <FontAwesomeIcon
                          icon={i.iconfa}
                          style={{ fontSize: '15px', color: i.color }}
                        />
                      ) : null
                    }
                  >
                    {' '}
                    {i.text}{' '}
                  </Button>
                </ListItem>
              );
            })}
          </List>
          {total > 0 ? (
            <Typography
              onClick={() => history.push('/menu/checkout')}
              className={classes.cart}
            >
              {' '}
              💁 Your Cart Total - ₹ {total} Go To cart &nbsp;{' '}
              <ShoppingCartIcon /> ➡️{' '}
            </Typography>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
