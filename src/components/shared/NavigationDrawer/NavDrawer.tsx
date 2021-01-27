import React from 'react';
import {version} from '../../../../package.json';
import {ListItem} from 'react-native-elements';
import {View} from 'react-native';
import SideMenu from 'react-native-side-menu-updated';
import {t} from 'i18n';
import {useHistory} from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useColors, ColorSchema} from 'styles/useColors';

export const NavDrawer = (props: any) => {
  const history = useHistory();
  const colors: ColorSchema = useColors();
  return (
    <SideMenu
      isOpen={props.isOpen}
      overlayColor={colors.trinary}
      menu={
        props.isOpen && (
          <View style={{backgroundColor: colors.primary}}>
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
                <ListItem.Title>{t('Version', {version})}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </View>
        )
      }>
      {props.children}
    </SideMenu>
  );
};
