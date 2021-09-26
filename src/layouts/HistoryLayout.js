import React from 'react';
import HistoryHeader from '../components/HistoryHeader';
import BottomNav from '../components/BottomNav';
function HistoryLayout({ children }) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <HistoryHeader />
      {children}
      <BottomNav />
    </div>
  );
}

export default HistoryLayout;
