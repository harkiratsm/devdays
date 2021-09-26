import React from 'react';
import { ResContext } from '../App';

import { ResponseContext } from '../App';
import Restaurant from '../components/Restaurant';
import SpinLoader from '../components/Loader/SpinLoader';
function Home() {
  let { newdata, setNewdata } = React.useContext(ResContext);
  const { bool } = React.useContext(ResponseContext);
  React.useEffect(() => {
    console.log(newdata);
  }, [newdata, setNewdata]);
  const renderrestaurant = newdata.map((i, index) => {
    return <Restaurant info={i} key={index} />;
  });
  return bool ? (
    <div
      style={{
        overflowX: 'scroll',
        height: '70vh'
      }}
    >
      {renderrestaurant}
    </div>
  ) : (
    <SpinLoader />
  );
}

export default Home;
