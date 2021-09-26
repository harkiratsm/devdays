import React from 'react';

import burger from '../static/burger.jpg';

import { Typography } from '@material-ui/core';

function History() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img style={{ height: '250px' }} src={burger} alt="burger"></img>
      <Typography color="textSecondary">
        You haven't marked any favourites yet.
      </Typography>
    </div>
  );
}

export default History;
