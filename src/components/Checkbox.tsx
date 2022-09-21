import React from 'react';
import {View, Text} from 'react-native';

export const Checkbox: React.FC<{title: string}> = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
}
