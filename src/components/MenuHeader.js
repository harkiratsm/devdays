import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import ButtonBase from '@material-ui/core/ButtonBase';
import {
  faClock,
  faMotorcycle,
  faPercentage
} from '@fortawesome/free-solid-svg-icons';
import {
  Box,
  Button,
  ListItem,
  Typography,
  ListItemIcon
} from '@material-ui/core';
import { List } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    width: '100%',
    margin: 'auto'
  },
  button: {
    '&:hover': {
      backgroundColor: 'green'
    },
    fontWeight: '700',
    width: '100px',
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px',
    backgroundColor: 'green',
    marginBottom: '6px'
  },
  image: {
    position: 'relative'
  },

  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px',
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px',
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`
  },
  imageMarked: {
    height: 3,

    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
}));

function MenuHeader({ info }) {
  let classes = useStyles();
  const list = [
    { text1: 'MODE', text2: 'delivery', icon: faMotorcycle },
    { text1: 'TIME', text2: '29min', icon: faClock },
    { text1: 'OFFERS', text2: 'view', icon: faPercentage }
  ];
  return (
    <>
      <Box className={classes.root}>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography
                  component="h5"
                  style={{ fontWeight: 650, fontSize: '25px' }}
                >
                  {info.name}
                </Typography>

                <Typography component="p" style={{ color: 'black' }}>
                  {info.resttype}
                </Typography>
                <Typography component="p" color="textSecondary">
                  {info.address}
                </Typography>
                <Typography
                  style={{ display: 'flex', alignItems: 'baseline' }}
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  <img
                    style={{ height: '24px' }}
                    alt="type1"
                    src="https://b.zmtcdn.com/data/o2_assets/e50eb01feab6bd50e50430f34b4645ac1613542991.png"
                  ></img>
                  {info.booktable === 'Yes' ? (
                    <img
                      style={{ height: '24px', marginLeft: '10px' }}
                      alt="type2"
                      src="https://b.zmtcdn.com/data/o2_assets/ff4c11043d4db744a704cc50e2c074e31613542952.png"
                    ></img>
                  ) : (
                    <></>
                  )}

                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      marginLeft: '4px'
                    }}
                  >
                    {' '}
                    more
                  </p>
                </Typography>
              </>
            }
          ></ListItemText>
        </ListItem>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<StarIcon />}
          >
            {(() => {
              var str = info.rating;
              var n = str?.search('/');
              var res = str?.slice(0, n);
              return res;
            })()}
          </Button>
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: '100px',
              height: '50px'
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(https://safe-wave-31703.herokuapp.com${info.photo})`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                1 Photos
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </div>
      </Box>
      <Divider />
      <Box>
        <List
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {list.map((i, index) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>
                  <Paper
                    elevation={3}
                    style={{
                      borderRadius: '50%',
                      height: '50px',
                      width: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <FontAwesomeIcon icon={i.icon} size="lg" />
                  </Paper>
                </ListItemIcon>

                <ListItemText
                  primary={<Typography>{i.text1}</Typography>}
                  secondary={<Typography>{i.text2}</Typography>}
                ></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
}

export default MenuHeader;
