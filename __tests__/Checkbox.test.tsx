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
 *    - 눌렸음 이벤트를 부모에게 전달할 것
 */
// TODO: stateful 컴포넌트 테스트 작성해보기

function noop() {}

it('전달받은 문구를 표현합니다.', () => {
  const TITLE = '하하하'
  const instance = render(<Checkbox title={TITLE} onPress={noop} />)
  const Text = instance.getByText(TITLE)
  expect(Text.props.children).toBe(TITLE)
})

it('체크박스를 누르면 onPress 핸들러 호출', () => {
  const handler = jest.fn()
  const TITLE = 'test'
  render(<Checkbox title={'test'} onPress={handler} />)
  fireEvent.press(screen.getByText(TITLE))
  expect(handler).toHaveBeenCalledTimes(1)
})
