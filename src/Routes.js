import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthGaurd from './components/AuthGaurd';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import HistoryLayout from './layouts/HistoryLayout';
import { Checkout } from './pages/Checkout';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
import MenuLayout from './layouts/MenuLayout';
import { MapContainer } from './components/MapContainer';
import History from './pages/History';
import MapLayout from './layouts/MapLayout';
import PreviousOrder from './components/PreviousOrder';
import CommonLayout from './layouts/CommonLayout';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/recent" exact>
          <HistoryLayout>
            <History></History>
          </HistoryLayout>
        </Route>
        <Route path="/recent/history" exact>
          <HistoryLayout>
            <PreviousOrder />
          </HistoryLayout>
        </Route>
        <Route path="/" exact>
          <AuthGaurd>
            <MainLayout>
              <Home />
            </MainLayout>
          </AuthGaurd>
        </Route>
        <Route path="/home/:home">
          <AuthGaurd>
            <MainLayout>
              <Home />
            </MainLayout>
          </AuthGaurd>
        </Route>
        <Route path="/profile" exact>
          <AuthGaurd>
            <CommonLayout>
              <Profile />
            </CommonLayout>
          </AuthGaurd>
        </Route>
        <Route path="/menu" exact>
          <AuthGaurd>
            <MenuLayout>
              <Menu />
            </MenuLayout>
          </AuthGaurd>
        </Route>
        <Route path="/menu/checkout" exact>
          <AuthGaurd>
            <Checkout />
          </AuthGaurd>
        </Route>
        <Route path="/map" exact>
          <MapLayout>
            <MapContainer />
          </MapLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
