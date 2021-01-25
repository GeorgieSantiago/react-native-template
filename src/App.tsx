import React from 'react';
import Routes from 'router/Routes';
import store from 'config/store';
import {Provider} from 'react-redux';
import {Text} from 'react-native';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Text>Navbar Placeholder</Text>
      </Routes>
    </Provider>
  );
}

export default App;
