import React, { useContext } from 'react';
import { LoginContext } from '../App';
import { Redirect } from 'react-router';

function AuthGuard({ children }) {
  let { user } = useContext(LoginContext);
  if (user !== false) {
    return children;
    
  } else {
    return <Redirect to="/login" />;
  }
}

export default AuthGuard;
