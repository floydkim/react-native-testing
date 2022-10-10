import React, {useState} from 'react'
import {View} from 'react-native'
import {Checkbox} from './Checkbox'

export interface CheckboxListItem {
  id: number
  title: string
  isChecked: boolean
}

interface Props<ListItemType extends CheckboxListItem> {
  // 실제 사용할 컴포넌트라면 stateless 하게 작성하겠지만, stateful 컴포넌트 테스트 연습을 위해 달리 구현.
  list?: ListItemType[]
  // onChangeSelection: () => void
}

export function CheckboxList<ListItem extends CheckboxListItem>(
  props: Props<ListItem>,
) {
  const [list, setList] = useState<ListItem[]>(props.list ?? []) // 여기 초기값도 원래는 이렇게 안짜겠지만..

  function handlePress(id: ListItem['id']) {
    // FIXME 배열 순회 비용을 줄이기 위해 Map 사용하기
    setList(prevList =>
      prevList.map(item =>
        item.id === id ? {...item, isChecked: !item.isChecked} : item,
      ),
    )
  }

  return (
    <View>
      {list.map(item => {
        return (
          <Checkbox
            key={item.title}
            title={item.title}
            onPress={() => handlePress(item.id)}
            isChecked={false}
          />
        )
      })}
    </View>
  )
}
