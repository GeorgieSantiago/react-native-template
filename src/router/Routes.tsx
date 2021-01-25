import React from 'react';
import {Text} from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';
import {Example} from 'screens';
import {RouterProps} from 'interfaces/RouterProps';

const Routes = (props: RouterProps) => (
  <NativeRouter>
    {!props.bottomNavigation && props.children}
    <Switch>
      <Route exact path="/">
        <Example />
      </Route>
      <Route>
        <Text>Page Not Found</Text>
      </Route>
    </Switch>
    {props.bottomNavigation && props.children}
  </NativeRouter>
);

export default Routes;
