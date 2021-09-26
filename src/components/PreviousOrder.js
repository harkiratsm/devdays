import React from 'react';
import axios from 'axios';
import Loader from './Loader/Loader';
import { HistoryContext } from '../App';
import Historydish from './Historydish';

function PreviousOrder() {
  let { history, setHistory } = React.useContext(HistoryContext);
  let [bool, setBool] = React.useState(false);
  React.useEffect(() => {
    async function getorder() {
      await axios
        .get('https://safe-wave-31703.herokuapp.com/order')
        .then((response) => {
          console.log(response.data);
          setHistory(response.data);
          setBool(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getorder();
  }, [setHistory]);

  return bool ? (
    <div style={{ overflowY: 'scroll', height: '90vh' }}>
      {history?.map((i, index) => {
        return <Historydish info={i} key={index} />;
      })}
    </div>
  ) : (
    <Loader />
  );
}

export default PreviousOrder;
