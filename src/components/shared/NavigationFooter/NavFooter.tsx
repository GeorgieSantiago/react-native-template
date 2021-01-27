import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {bottomNavigationStyle} from 'styles/Main.styles';

export const NavFooter = () => {
  return (
    <View style={bottomNavigationStyle.container}>
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        containerStyle={bottomNavigationStyle.button}
        onPress={() => console.log('hello')}
      />
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        containerStyle={bottomNavigationStyle.button}
        onPress={() => console.log('hello')}
      />
      <Icon
        raised
        reverse
        name="home"
        size={30}
        type="font-awesome"
        color="#f50"
        containerStyle={bottomNavigationStyle.button}
        onPress={() => console.log('hello')}
      />
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        containerStyle={bottomNavigationStyle.button}
        onPress={() => console.log('hello')}
      />
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        containerStyle={bottomNavigationStyle.button}
        onPress={() => console.log('hello')}
      />
    </View>
  );
};
