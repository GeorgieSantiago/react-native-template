import React, {useState} from 'react';
import { ButtonGroup, ElementObject, Icon } from 'react-native-elements';

export const NavFooter = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const buttons: string[] = [
        "Home",
        "Settings"
    ]
    return (
    <ButtonGroup
        onPress={setSelectedIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 100}}
      />
    )
}