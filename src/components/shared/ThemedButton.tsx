import React from 'react';
import {TouchableNativeFeedback, Text} from 'react-native';
import {componentStyle} from 'styles/Main.styles';

const ThemedButton = (props: any) => (
  <TouchableNativeFeedback style={componentStyle.button}>
    <Text>{props.text}</Text>
  </TouchableNativeFeedback>
);

export default ThemedButton;
