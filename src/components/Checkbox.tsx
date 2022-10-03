import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

interface Props {
  title: string
  onPress: () => void
}

export function Checkbox(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
