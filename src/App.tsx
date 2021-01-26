import React from 'react';
import Routes from 'router/Routes';
import store from 'config/store';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'react-native-elements';
import {theme} from 'styles/Theme.styles';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
