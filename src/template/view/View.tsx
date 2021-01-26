import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ViewProps } from 'interfaces/TemplateProps';
import { NavDrawer } from 'components/shared/NavigationDrawer/NavDrawer';
import { NavHeader } from 'components/shared/NavigationHeader/NavHeader';
import { NavFooter } from 'components/shared/NavigationFooter/NavFooter';

const AppView = (props: ViewProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <View style={{ flex: 1 }}>
        <NavHeader onPressLeftComponent={() => setIsOpen(!isOpen)} />
        <NavDrawer isOpen={isOpen}>
        <ScrollView>
          {props.children}
        </ScrollView>
        </NavDrawer>
        <NavFooter />
      </View>
  );
};

export default AppView;
