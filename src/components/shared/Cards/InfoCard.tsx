import {t} from 'i18n';
import React from 'react';
import {Text} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import {viewStyle} from 'styles/Main.styles';

interface InfoCardProp {
  icon: React.Component | Element;
  title: React.Component | Element | string;
  content: React.Component | Element | string;
  onPress: () => any;
}

export const InfoCard = (props: InfoCardProp) => {
  return (
    <Card>
      <Card.Title>
        {props.icon} {props.title}
      </Card.Title>
      <Card.Divider />
      <Text style={viewStyle.mb10}>{props.content}</Text>
      <Button
        onPress={props.onPress}
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={viewStyle.flatButton}
        title={t('common.Return')}
      />
    </Card>
  );
};
