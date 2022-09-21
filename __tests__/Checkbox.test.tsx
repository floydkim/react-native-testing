import 'react-native'
import React from 'react'
import {render} from '../src/test/test-utils'
import {ReactTestInstance} from 'react-test-renderer'
import {cleanup, screen} from '@testing-library/react-native'
import { Checkbox } from '../src/components/Checkbox';

afterEach(cleanup)

it('컴포넌트 렌더', () => {
    const TITLE = '하하하';
    render(<Checkbox title={TITLE} />)
    const {getByText} = screen

    const innerText = getByText(TITLE)
    const button = innerText.parent as ReactTestInstance

    expect(button.props.style).toEqual(undefined)
    // expect(innerText.props.style).toMatchObject({color: 'black'})
})
