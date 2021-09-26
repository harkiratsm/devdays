import React from 'react';
import { UserContext } from '../App';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../firebase';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { ExitToApp } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1)
  }
}));
function Profile() {
  let { user } = React.useContext(UserContext);

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ListItem style={{ minWidth: '400px', maxWidth: '100%' }}>
        <ListItemText
          primary={
            <>
              <Typography variant="h4">{user.displayName}</Typography>
            </>
          }
          secondary={
            <>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                style={{ display: 'inline' }}
              >
                {user.email}
              </Typography>
            </>
          }
        ></ListItemText>
        <ListItemAvatar className={classes.avatar}>
          <Avatar
            alt="Remy Sharp"
            src={user.photoURL}
            style={{ width: '80px', height: '80px' }}
          />
        </ListItemAvatar>
      </ListItem>
      <Button
        variant="contained"
        color="secondary"
        // className={classes.button}
        onClick={() => firebase.auth().signOut()}
        startIcon={<ExitToApp />}
      >
        Logout
      </Button>
    </Box>
  );
}

export default Profile;
