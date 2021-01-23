/**
 * @format
 */

import 'react-native';
import React from 'react';
import View from './View';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<View />);
});
