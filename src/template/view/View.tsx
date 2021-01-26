import React, { useState } from 'react';
import { ViewProps } from 'interfaces/TemplateProps';
import { NavDrawer } from 'components/shared/NavigationDrawer/NavDrawer';
import { NavHeader } from 'components/shared/NavigationHeader/NavHeader';
import { NavFooter } from 'components/shared/NavigationFooter/NavFooter';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { exampleStyle as styles } from 'styles/Main.styles';

const AppView = (props: ViewProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={{ flex: 1 }}>
      <NavHeader onPressLeftComponent={() => setIsOpen(!isOpen)} />
      <NavDrawer isOpen={isOpen}>
        <ScrollView>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              {props.children}
            </ScrollView>
          </SafeAreaView>
        </ScrollView>
      </NavDrawer>
      <NavFooter />
    </View>
  );
};

export default AppView;
