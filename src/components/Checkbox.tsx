import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

interface Props {
  title: string
  onPress: () => void
  isChecked: boolean
}

export function Checkbox(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={{flexDirection: 'row'}}>
      {props.isChecked ? <CheckedIcon /> : <UncheckedIcon />}
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export function CheckedIcon() {
  const SIZE = 20
  return <View style={{width: SIZE, height: SIZE}} testID={'checked-icon'} />
}

export function UncheckedIcon() {
  const SIZE = 20
  return <View style={{width: SIZE, height: SIZE}} testID={'unchecked-icon'} />
}
