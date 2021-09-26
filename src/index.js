import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { ThemeProvider } from '@material-ui/styles';
import {createMuiTheme} from "@material-ui/core";
import {unstable_createMuiStrictModeTheme} from "@material-ui/core";
// ...
const createTheme = process.env.NODE_ENV === 'production' ? createMuiTheme : unstable_createMuiStrictModeTheme;
const theme = createTheme({
  // ...
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

