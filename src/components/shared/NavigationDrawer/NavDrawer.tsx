import React from 'react';
import { version } from '../../../../package.json';
import { ListItem } from 'react-native-elements';
import { Text, Animated, View } from 'react-native';
import SideMenu from 'react-native-side-menu-updated';
import { t } from 'i18n';
import { useHistory } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export const NavDrawer = (props: any) => {
  const history = useHistory()

  return (
    <SideMenu
      isOpen={props.isOpen}
      overlayColor={'#002e63'}
      menu={props.isOpen && (
        <View style={{ backgroundColor: '#2089dc' }}>
          <ListItem key={0} onPress={() => history.push('/')} bottomDivider>
            <Icon name="home" />
            <ListItem.Content>
              <ListItem.Title>{t('Styleguide')}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={1} bottomDivider>
            <Icon name="info" />
            <ListItem.Content>
              <ListItem.Title>{t('About')}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem key={2} bottomDivider>
            <Icon name="heartbeat" />
            <ListItem.Content>
              <ListItem.Title>{t('Version', { version })}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      )}
    >
      {props.children}
    </SideMenu>
  )
}