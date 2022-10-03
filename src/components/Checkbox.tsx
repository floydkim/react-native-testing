import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
}

export function Checkbox (props: Props) {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}
