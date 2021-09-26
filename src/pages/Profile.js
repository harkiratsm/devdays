import React from 'react';
import { PayloadContext} from '../App';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { ExitToApp } from '@material-ui/icons';
import { Link } from 'react-router-dom';
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
  },
  text:{
    fontSize:"17px",
    fontWeight:550,
    marginTop:"20%",
    marginLeft:"20px"
  },
}));
function Profile() {
  let { payload } = React.useContext(PayloadContext);
  const classes = useStyles();
  const history=useHistory();
  console.log(localStorage.getItem("auth"))
  console.log(payload)
  return (
    <>
    <Box className={classes.root}>
      <ListItem style={{ minWidth: '400px', maxWidth: '100%' }}>
        <ListItemText
          primary={
            <>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                style={{ display: 'inline' }}
              >
                {payload.identifier}
              </Typography>
            </>
          }
        ></ListItemText>
        <ListItemAvatar className={classes.avatar}>
          <Avatar
            alt="Remy Sharp"
            style={{ width: '80px', height: '80px' }}
          />
        </ListItemAvatar>
      </ListItem>
      <Button
        variant="contained"
        color="secondary"
        // className={classes.button}
        onClick={() => {
          history.push("/login")
          localStorage.removeItem("auth")
        }}
        startIcon={<ExitToApp />}
      >
        Logout
      </Button>
      
    </Box> 
    <Box >
      <Typography className={classes.text}>
        If You Faces Any Issues & Report Bugs Just <Link to="/contactus"> Contact Us </Link>
      </Typography>
    </Box>
    </>
  );

}

export default Profile;
