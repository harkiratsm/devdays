import React from 'react';
import BottomNav from '../components/BottomNav';
function CommonLayout({ children }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      {children}
      <BottomNav />
    </div>
  );
}

export default CommonLayout;
