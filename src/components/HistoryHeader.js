import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router';
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'black'
    }
  }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: 'red',

    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(4),
    '&:focus': {
      opacity: 1
    }
  }
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  demo1: {
    backgroundColor: theme.palette.background.paper
  },
  demo2: {
    backgroundColor: 'white'
  }
}));

export default function HistoryHeader() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    let path = window.location.pathname;
    if (path === '/recent') {
      setValue(0);
    } else if (path === '/recent/history') {
      setValue(1);
    }
  }, [value]);
  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab
            label="favourites"
            onClick={() => history.push('/recent')}
          />
          <StyledTab
            label="history"
            onClick={() => history.push('/recent/history')}
          />
        </StyledTabs>
      </div>
    </div>
  );
}
