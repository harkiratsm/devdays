import React, { useContext } from 'react';
import { UserContext } from '../App';
import lazygif from '../static/mainloading1.svg';
import { Redirect } from 'react-router';

function AuthGuard({ children }) {
  let { user } = useContext(UserContext);

  if (user === undefined) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '500px',
          height: '100vh'
        }}
      >
        <img
          src={lazygif}
          alt="loading .... "
          style={{ width: '300px', height: '200px' }}
        ></img>
      </div>
    );
  } else if (user === null) {
    return <Redirect to="/login" />;
  } else {
    return children;
  }
}

export default AuthGuard;
