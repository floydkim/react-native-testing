import 'react-native'
import React from 'react'
import {render} from '../src/test/test-utils'
import {cleanup, fireEvent, screen} from '@testing-library/react-native'
import {Checkbox} from '../src/components/Checkbox'

afterEach(cleanup)

/**
 * TODO: 체크박스 컴포넌트 TDD
 *  - 좌측에 체크박스, 우측에 텍스트가 위치할 것 <- 이건 스냅샷같은걸로만 검증되겠는걸
 *  - 컴포넌트를 누르면
 *    - 이 구현은 좀 상황에 따라 다를것이다.. 상태를 가진 컴포넌트여야할수도 아닐수도 있다.
 *    - ? 1) 눌렸음 이벤트를 부모에게 전달할 것
 *    - ? 2) 내부 상태가 토글될 것
 */

function noop() {}

it('전달받은 문구를 표현합니다.', () => {
  const TITLE = '하하하'
  const instance = render(<Checkbox title={TITLE} onPress={noop} />)
  expect(instance.getByText(TITLE).props.children).toBe(TITLE)
})

it('? 1) 체크박스를 누르면 onPress 핸들러 호출', () => {
  const handler = jest.fn()
  const TITLE = 'test'
  render(<Checkbox title={'test'} onPress={handler} />)
  fireEvent.press(screen.getByText(TITLE))
  expect(handler).toHaveBeenCalledTimes(1)
})
