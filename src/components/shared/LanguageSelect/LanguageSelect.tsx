import React, { useState, useEffect } from 'react';
import { BottomSheet, ListItem } from 'react-native-elements';
import I18n, { t } from 'i18n';
import { Button, Text } from 'react-native';
import { getLanguages } from 'react-native-i18n';

export const LanguageSelect = () => {
    const [show, setShow] = useState<boolean>(false);
    const [languages, setLanguages] = useState<any[]>([])

    const handlePress = (key: any) => {
        I18n.translate(key)
    }

    useEffect(() => {
      if( languages ) {
        getLanguages().then(languages => setLanguages(languages));
      }
    }, [])

    return(
        <>
        <Button onPress={() => setShow(!show)} title={t('SelectLanguage')} />
        <BottomSheet
          modalProps={{}}
          isVisible={show}
          containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        >       
          {languages.length === 0 ? (
            <Text>Loading...</Text>
          ) : languages.map((key: any, idx: number) => 
              (
                <ListItem  key={idx} onPress={() => handlePress(key)}>
                    <ListItem.Content>
                        {key}
                    </ListItem.Content>
                    <ListItem.CheckBox checked={key === I18n.currentLocale()} />
                </ListItem>  
              )
          )}
        </BottomSheet>
        </>
    )
}