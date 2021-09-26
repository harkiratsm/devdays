import React from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { AccountCircle, LocalMallOutlined } from '@material-ui/icons';
const useStyles = makeStyles({
  root: {
    width: '100%',

    bottom: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'white'
  }
});
export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');
  let history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlepush = (path) => {
    if (window.location.pathname !== path) history.push(path);
  };
  React.useEffect(() => {
    let path = window.location.pathname;

    if (path === '/') {
      setValue('1');
    } else if (path === '/recent' || path === '/recent/history') {
      setValue('2');
    } else if (path === '/profile') {
      setValue('3');
    }
  }, [value]);
  return (
    <Paper square className={classes.root} elevation={3}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        orientation="horizontal"
        aria-label="icon label tabs example"
      >
        <Tab
          value="1"
          icon={<LocalMallOutlined />}
          onClick={() => handlepush('/')}
          label="ORDER"
        />
        <Tab
          value="2"
          icon={<FavoriteIcon />}
          onClick={() => handlepush('recent')}
          label="HISTORY"
        />
        <Tab
          value="3"
          icon={<AccountCircle />}
          onClick={() => handlepush('profile')}
          label="PROFILE"
        />
      </Tabs>
    </Paper>
  );
}
