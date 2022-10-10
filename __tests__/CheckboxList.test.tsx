import 'react-native'
import React from 'react'
import {render} from '../src/test/test-utils'
import {cleanup, fireEvent, screen} from '@testing-library/react-native'
import {CheckboxList, CheckboxListItem} from '../src/components/CheckboxList'

afterEach(cleanup)

/**
 * TODO: 체크박스 리스트 컴포넌트
 */

function noop() {}

// TODO: 뭘 테스트해야 의미 있을까?

it('전달받은 리스트 개수만큼 Checkbox 컴포넌트를 렌더합니다', () => {
  function getList(): CheckboxListItem[] {
    return [
      {id: 1, title: 'item1', isChecked: false},
      {id: 2, title: 'item2', isChecked: false},
      {id: 12, title: 'item12', isChecked: false},
    ]
  }
  const list = getList()
  render(<CheckboxList list={list} />)
  expect(screen.queryAllByText(/item*/i).length).toBe(list.length)
})

it('체크박스를 누르면 onPress 핸들러 호출', () => {
  // TODO
  // const handler = jest.fn()
  // const TITLE = 'test'
  // render(<Checkbox title={'test'} onPress={handler} />)
  // fireEvent.press(screen.getByText(TITLE))
  // expect(handler).toHaveBeenCalledTimes(1)
})

it('누른 체크박스의 체크상태가 토글되어야 함', () => {
  // TODO
})
