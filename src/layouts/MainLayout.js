import React from 'react';
import PrimarySearchAppBar from '../components/Appbar';
import BottomNav from '../components/BottomNav';

function Mainlayout({ children }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      <PrimarySearchAppBar></PrimarySearchAppBar>
      {children}
      <BottomNav />
    </div>
  );
}

export default Mainlayout;
