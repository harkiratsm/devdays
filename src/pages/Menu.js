import React from 'react';
import { useHistory } from 'react-router-dom';
import Dishes from '../components/Dishes';
import { MenuContext } from '../App';
import { useSnackbar } from 'notistack';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';
import MenuHeader from '../components/MenuHeader';
import { BillContext } from '../App';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  bt: {
    '&:hover': {
      backgroundColor: 'inherit'
    },
    border: '0px',
    color: 'white',
    fontSize: '15px',
    backgroundColor: 'inherit'
  }
}));
function Menu() {
  let { menudata } = React.useContext(MenuContext);

  let { total } = React.useContext(BillContext);
  let classes = useStyles();
  let history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const action = React.useCallback(
    (key) => {
      return (
        <div>
          <Button
            variant="contained"
            className={classes.bt}
            onClick={() => {
              closeSnackbar(key);
              history.push('/menu/checkout');
            }}
            endIcon={<ChevronRightIcon></ChevronRightIcon>}
          >
            View Cart
          </Button>
        </div>
      );
    },
    [closeSnackbar, history, classes.bt]
  );

  const rendermenu = menudata.menu?.map((i, index) => {
    return <Dishes info={i} key={index} />;
  });

  React.useEffect(() => {
    if (total > 0 && window.location.pathname === '/menu')
      enqueueSnackbar(`New Item Added ₹ ${total} `, {
        variant: 'error',
        action
      });
  }, [total, enqueueSnackbar, action]);

  return (
    <div
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '88vh'
      }}
    >
      <MenuHeader info={menudata} />
      {rendermenu}
    </div>
  );
}

export default Menu;
