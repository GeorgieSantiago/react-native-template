import React from 'react';
import Routes from 'router/Routes';
import store from 'config/store';
import {Provider} from 'react-redux';
import { NavHeader } from 'components/shared/NavigationHeader/NavHeader';
import { NavFooter } from 'components/shared/NavigationFooter/NavFooter';
import { ThemeProvider } from 'react-native-elements';
import {theme} from 'styles/Theme.styles';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <NavHeader />
              <Routes />
          <NavFooter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
