import React, { useEffect, useCallback, useState } from 'react';
import Routes from 'router/Routes';
import store from 'config/store';
import {Provider} from 'react-redux';
import { Text } from 'react-native';
import Storybook from "../storybook";

function Entry() {
  return (
    <Provider store={store}>
      <Routes>
          <Text>Navbar Placeholder</Text>
      </Routes>
    </Provider>
  );
}

const App = () => {
  const [storybookActive, setStorybookActive] = useState(false);
  const toggleStorybook = useCallback(
    () => setStorybookActive(active => !active),
    []
  );

  useEffect(() => {
    if (__DEV__) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const DevMenu = require("react-native-dev-menu");
      DevMenu.addItem("Toggle Storybook", toggleStorybook);
    }
  }, [toggleStorybook]);

  return storybookActive ? <Storybook /> : <Entry />;
};

export default App;