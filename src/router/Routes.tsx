import React from 'react';
import { Text } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import { Example } from 'screens';
const Routes = (props: any) => (
    <NativeRouter>
        <Route exact path="/">
            <Example />
        </Route>
        <Route path="*">
            <Text>Page Not Found</Text>
        </Route>
    </NativeRouter>
);

export default Routes;