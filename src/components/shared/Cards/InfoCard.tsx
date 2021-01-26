import { t } from 'i18n';
import React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

interface InfoCardProp {
    icon: React.Component | Element;
    title: React.Component | Element | string;
    content: React.Component | Element | string;
    onPress: () => any;
}

export const InfoCard = (props: InfoCardProp) => {

    return (
        <Card>
            <Card.Title>{props.icon} {props.title}</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
                {props.content}
            </Text>
            <Button
                onPress={props.onPress}
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title={t('common.Return')} />
        </Card>
    )
}