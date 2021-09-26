import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import React from 'react';
import SpinLoader from './Loader/SpinLoader';

const useStyle = makeStyles((theme) => ({
  root: {
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 'auto'
  },
  add: {
    width: '200px',
    overflow: 'hidden',
    textOverflow: ' ellipsis',
    display: ' -webkit-box',
    WebkitLineClamp: '2' /* number of lines to show */,
    WebkitBoxOrient: 'vertical'
  }
}));
function Historydish({ info }) {
  let classes = useStyle();
  let image = React.useRef('');
  const [bool, setBool] = React.useState(false);
  const [resid, setResid] = React.useState([]);
  React.useEffect(() => {
    async function getRes() {
      await axios
        .get(
          `https://safe-wave-31703.herokuapp.com/restaurant/${info.restaurant}`
        )
        .then((res) => {
          setResid(res.data);
          image.current = `https://safe-wave-31703.herokuapp.com${res.data.photo}`;
          setBool(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getRes();
  }, [info.restaurant, image, resid.photo]);
  return (
    <div style={{ margin: '50px 15px 50px 15px' }}>
      <Paper elevation={3}>
        <Box className={classes.root}>
          <ListItem>
            <ListItemIcon>
              {bool ? (
                <img
                  style={{ height: '50px', marginRight: '30px' }}
                  src={image.current}
                  alt="resimage"
                ></img>
              ) : (
                <SpinLoader />
              )}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography component="h5" style={{ fontWeight: '600' }}>
                  {resid.name}
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" className={classes.add}>
                  {resid.address}
                </Typography>
              }
            ></ListItemText>
          </ListItem>
          <div style={{ fontWeight: '600', marginRight: '40px' }}>
            ₹{info.bill}
          </div>
        </Box>
        <Box>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    color="textSecondary"
                    style={{ textTransform: 'uppercase' }}
                  >
                    Items
                  </Typography>
                }
                secondary={
                  <>
                    {info?.dishes?.map((i, index) => {
                      return (
                        <Typography
                          style={{ color: 'black', fontWeight: '550' }}
                          key={index}
                        >
                          {i.key} X {i.name}
                        </Typography>
                      );
                    })}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    color="textSecondary"
                    style={{ textTransform: 'uppercase' }}
                  >
                    Ordered On
                  </Typography>
                }
                secondary={
                  <Typography style={{ color: 'black', fontWeight: '550' }}>
                    28 Dec 2020
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Paper>
    </div>
  );
}

export default Historydish;
