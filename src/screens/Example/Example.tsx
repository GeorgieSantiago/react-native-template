/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';
import {exampleStyle as styles} from 'styles/Main.styles';
declare const global: {HermesInternal: null | {}};

const Example = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text>SN10</Text>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default Example;
