import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ThemedButton from './ThemedButton';

storiesOf('Themed Button', module).add('with text', () => (
  <ThemedButton>
    {'Button'}
  </ThemedButton>
));
