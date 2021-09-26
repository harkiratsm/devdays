import React from 'react';

function MapLayout({ children }) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {children}
    </div>
  );
}

export default MapLayout;
