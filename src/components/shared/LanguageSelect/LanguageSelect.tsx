import React, {useState, useEffect} from 'react';
import {BottomSheet, ListItem} from 'react-native-elements';
import I18n, {t} from 'i18n';
import {Button, Text} from 'react-native';
import {getLanguages} from 'react-native-i18n';

export const LanguageSelect = () => {
  const [show, setShow] = useState<boolean>(false);
  const [languages, setLanguages] = useState<any[]>([]);

  const handlePress = (key: any) => {
    I18n.translate(key);
    setShow(false);
  };

  useEffect(() => {
    if (languages) {
      getLanguages().then((languageList) => setLanguages(languageList));
    }
  });

  return (
    <>
      <Button onPress={() => setShow(!show)} title={t('SelectLanguage')} />
      <BottomSheet modalProps={{}} isVisible={show}>
        {languages.length === 0 ? (
          <Text>Loading...</Text>
        ) : (
          languages.map((key: any, idx: number) => (
            <ListItem key={idx} onPress={() => handlePress(key)}>
              <ListItem.Content>
                <ListItem.Title>{key}</ListItem.Title>
              </ListItem.Content>
              <ListItem.CheckBox checked={key === I18n.currentLocale()} />
            </ListItem>
          ))
        )}
      </BottomSheet>
    </>
  );
};
