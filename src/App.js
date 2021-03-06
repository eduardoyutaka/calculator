import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from './components/Main';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    caption: {
      fontSize: 18,
      fontWeight: 600,
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
    },
    h3: {
      fontSize: 32,
      fontWeight: 600,
    },
    h4: {
      fontSize: 28,
      fontWeight: 600,
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
    },
    h6: {
      fontSize: 22,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 600,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
