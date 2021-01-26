import React from 'react';
import {Header} from 'react-native-elements';
import {t} from 'i18n';
import {LanguageSelect} from '../LanguageSelect/LanguageSelect';

export const NavHeader = (props: any) => {
  return (
    <Header
      leftComponent={{
        onPress: () => props.onPressLeftComponent(),
        style: { fontSize: 18 },
        icon: 'menu',
        color: '#fff',
      }}
      centerComponent={{text: t('Styleguide'), style: {color: '#fff', fontSize: 18}}}
      rightComponent={<LanguageSelect />}
    />
  );
};
