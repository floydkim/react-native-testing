import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
}

// TODO: 테스트 갖춘 후, 화살표함수 안쓰도록 변경해보기
export const Checkbox = (props: Props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}
