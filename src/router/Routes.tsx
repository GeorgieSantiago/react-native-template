import React from 'react';
import {Text} from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';
import {Styleguide} from 'screens';
import AppView from 'template/view/View';
const Routes = () => (
  <NativeRouter>
    <AppView>
      <Switch>
        <Route exact path="/">
          <Styleguide />
        </Route>
        <Route>
          <Text>Page Not Found</Text>
        </Route>
      </Switch>
    </AppView>
  </NativeRouter>
);

export default Routes;
