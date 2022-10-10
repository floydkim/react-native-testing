import 'react-native'
import React from 'react'
import {render} from '../src/test/test-utils'
import {cleanup, fireEvent, screen} from '@testing-library/react-native'
import {Checkbox, CheckedIcon, UncheckedIcon} from '../src/components/Checkbox'

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
  const instance = render(
    <Checkbox title={TITLE} onPress={noop} isChecked={true} />,
  )
  const Text = instance.getByText(TITLE)
  expect(Text.props.children).toBe(TITLE)
})

it('체크박스를 누르면 onPress 핸들러 호출', () => {
  const handler = jest.fn()
  const TITLE = 'test'
  render(<Checkbox title={'test'} onPress={handler} isChecked={true} />)
  fireEvent.press(screen.getByText(TITLE))
  expect(handler).toHaveBeenCalledTimes(1)
})

it('체크 여부에 따라 적절한 아이콘이 표시되어야 합니다. (체크 됨)', () => {
  render(<Checkbox title={'test'} onPress={noop} isChecked={true} />)
  expect(screen.queryByTestId('checked-icon')).not.toBeNull() // 아이콘 컴포넌트의 testID를 알아야 한다는 단점..
  expect(screen.UNSAFE_queryByType(CheckedIcon)).not.toBeNull() // 이게 좋아보이지만 권장하지 않는 API..
})

it('체크 여부에 따라 적절한 아이콘이 표시되어야 합니다. (체크 안됨)', () => {
  render(<Checkbox title={'test'} onPress={noop} isChecked={false} />)
  expect(screen.queryByTestId('unchecked-icon')).not.toBeNull() // 아이콘 컴포넌트의 testID를 알아야 한다는 단점..
  expect(screen.UNSAFE_queryByType(UncheckedIcon)).not.toBeNull() // 이게 좋아보이지만 권장하지 않는 API..
})
