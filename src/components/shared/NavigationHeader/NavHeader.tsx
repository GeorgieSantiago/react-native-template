import React from 'react';
import { Header } from 'react-native-elements';
import { t } from 'i18n';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';

export const NavHeader = () => {
    return (
        <Header
          placement="left"
          leftComponent={{ onPress: () => {console.log("Open Navigation")},icon: 'menu', color: '#fff' }}
          centerComponent={{ text: t('Styleguide'), style: { color: '#fff' } }}
          rightComponent={<LanguageSelect />}
        />
    )
}