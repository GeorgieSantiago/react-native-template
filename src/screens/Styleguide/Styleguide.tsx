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
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

declare const global: { HermesInternal: null | {} };

const list = [
  {
    title: 'React Native Elements',
    icon: <Icon name="react" />,
  },
  {
    title: 'Redux',
    icon: <Icon name="store" />,
  },
  {
    title: 'Storybook',
    icon: <Icon name="book" />,
  },
  {
    title: 'I18N',
    icon: <Icon name="languages" />,
  },
  {
    title: 'Jest',
    icon: <Icon name="cogs" />,
  },
  {
    title: 'Docker',
    icon: <Icon name="react" />,
  },

]

const Styleguide = () => (
  <>
    <View>
      {
        list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            {item.icon}
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      }
    </View>

  </>
);

export default Styleguide;
