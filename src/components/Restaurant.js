import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider';
import { MenuContext } from '../App';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 425,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '40px',
    marginTop: '20px',
    borderRadius: '20px'
  },
  media: {
    height: 200
  },
  button: {
    '&:hover': {
      backgroundColor: 'green'
    },
    fontWeight: '700',

    backgroundColor: 'green'
  }
}));

export default function Restaurant({ info }) {
  const classes = useStyles();
  let { setMenudata } = React.useContext(MenuContext);
  let history = useHistory();
  const handlemenu = () => {
    setMenudata(info);
  };
  return (
    <Card
      className={classes.root}
      onClick={() => {
        handlemenu();
        history.push('/menu');
      }}
    >
      <CardMedia
        className={classes.media}
        image={`https://safe-wave-31703.herokuapp.com${info.photo}`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {info.name}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<StarIcon />}
          >
            {(() => {
              var str = info.rating;
              var n = str.search('/');
              var res = str.slice(0, n);
              return res;
            })()}
          </Button>
        </Typography>
        <Typography variant="body2" color="textPrimary" component="span">
          {info.resttype}
        </Typography>
        <Divider style={{ marginTop: '8px', marginBottom: '8px' }} />
        <Typography
          style={{ display: 'flex', alignItems: 'center' }}
          variant="body2"
          color="textSecondary"
          component="span"
        >
          <img
            style={{ height: '24px' }}
            src="https://b.zmtcdn.com/data/o2_assets/e50eb01feab6bd50e50430f34b4645ac1613542991.png"
            alt="type"
          ></img>
          {info.booktable === 'Yes' ? (
            <img
              style={{ height: '24px', marginLeft: '10px' }}
              src="https://b.zmtcdn.com/data/o2_assets/ff4c11043d4db744a704cc50e2c074e31613542952.png"
              alt="type1"
            ></img>
          ) : (
            <></>
          )}

          <p style={{ fontSize: '12px', fontWeight: '700', marginLeft: '4px' }}>
            Follow all the max Safety measures to ensure your food is safe
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
