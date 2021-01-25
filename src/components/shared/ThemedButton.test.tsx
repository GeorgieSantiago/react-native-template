/**
 * @format
 */

import 'react-native';
import React from 'react';
import ThemedButton from './ThemedButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

it('renders correctly', () => {
  renderer.create(
  <ThemedButton>
      Native Button
  </ThemedButton>
  )
});

it('button clicked', () => {
    let clicked = false;
    const button = renderer.create(
        <>
        <ThemedButton onTouch={() => clicked = true} id="button">
            <Text>Native Button</Text>
        </ThemedButton>
        <Text>{clicked ? "Yes" : "No"}</Text>
        </>
    );

    const el = button.getInstance()?.findAllByType('button');
    el?.map((e: any) => e.click());
    const de = button.toJSON();
    expect(de).toContain('Yes');
})