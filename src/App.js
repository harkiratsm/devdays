import React, { useState, useEffect } from 'react';
import axios from './axios';
import { Box } from '@material-ui/core';
import Routes from './Routes';
import { SnackbarProvider } from 'notistack';
let ResContext = React.createContext();
let MenuContext = React.createContext();
let CartContext = React.createContext();
let BillContext = React.createContext();
let ResponseContext = React.createContext();
let HistoryContext = React.createContext();
let LoginContext=React.createContext();
let PayloadContext=React.createContext();
function App() {
  const [user, setUser] = useState(localStorage.getItem("auth")?true:false);
  const [newdata, setNewdata] = useState([]);
  const [menudata, setMenudata] = useState([]);
  const [total, setTotal] = useState(0);
  const [payload,setPayload] =useState(localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{});
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [bool, setBool] = useState(false);
  
  useEffect(() => {
    async function fetchitems() {
      await axios
        .get('https://safe-wave-31703.herokuapp.com/restaurant')
        .then((response) => {
          setNewdata(response.data.splice(0, 20));
          // response.splice(0,20);
          // setNewdata(response.data.items)
          setBool(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchitems();
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: '#999999' }}
    >
      <Box
        style={{
          width: '500px',
          height: '100vh',
          backgroundColor: 'white'
        }}
      >
        <HistoryContext.Provider value={{ history, setHistory }}>
          <LoginContext.Provider value={{ user, setUser }}>
            <PayloadContext.Provider value={{payload,setPayload}}>
              <ResponseContext.Provider value={{ bool }}>
                <ResContext.Provider value={{ newdata, setNewdata }}>
                  <CartContext.Provider value={{ cart, setCart }}>
                    <BillContext.Provider value={{ total, setTotal }}>
                      <MenuContext.Provider value={{ menudata, setMenudata }}>
                        <SnackbarProvider
                          dense
                          maxSnack={1}
                          preventDuplicate={false}
                          iconVariant={{
                            error: '🛒'
                          }}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                          }}
                        >
                          <Routes></Routes>
                        </SnackbarProvider>
                      </MenuContext.Provider>
                    </BillContext.Provider>
                  </CartContext.Provider>
                </ResContext.Provider>
              </ResponseContext.Provider>
            </PayloadContext.Provider>
          </LoginContext.Provider>
        </HistoryContext.Provider>
      </Box>
    </Box>

    // <div>
    //   {user===undefined?<h1>loading</h1>:user===null? />:}
    // </div>
  );
}

export {
  App,
  LoginContext,
  ResContext,
  MenuContext,
  CartContext,
  BillContext,
  PayloadContext,
  HistoryContext,
  ResponseContext
};
