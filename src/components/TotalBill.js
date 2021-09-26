import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { BillContext } from '../App';
import Link from '@material-ui/core/Link';
function TotalBill() {
  let { total } = React.useContext(BillContext);
  const [num, setNum] = React.useState(21);
  const [link, setLink] = React.useState('Remove');
  const info = [
    { text1: 'Item Total', text2: total, color: 'initial', link: false },
    {
      text1: 'Delivery Charge',
      text2: '19',
      color: 'textSecondary',
      link: false
    },
    {
      text1: 'Donate ₹2 to Feeding India Foundation',
      text2: '2',
      color: 'textSecondary',
      link: true
    },
    { text1: 'GRAND TOTAL', text2: total + num, color: 'initial', link: false }
  ];
  const handleremove = () => {
    setNum(21 - 2);
    setLink('Add Back');
  };
  const handlerem = () => {
    setNum(21);
    setLink('Remove');
  };
  return (
    <List>
      {info.map((i, index) => {
        return (
          <ListItem key={index}>
            <ListItemText>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography color={i.color}>
                  {i.text1}{' '}
                  {i.link ? (
                    <Link
                      style={{ color: 'rgb(211,47,47)' }}
                      underline="none"
                      onClick={link === 'Remove' ? handleremove : handlerem}
                    >
                      {link}
                    </Link>
                  ) : null}
                </Typography>
                <Typography color={i.color}>₹{i.text2} </Typography>
              </div>
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
}

export default TotalBill;
