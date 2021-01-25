import React from 'react';
import {Text} from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';
import {Styleguide} from 'screens';

const Routes = () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/">
        <Styleguide />
      </Route>
      <Route>
        <Text>Page Not Found</Text>
      </Route>
    </Switch>
  </NativeRouter>
);

export default Routes;
