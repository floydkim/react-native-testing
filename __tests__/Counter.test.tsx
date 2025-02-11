import React from 'react'
import {cleanup, fireEvent, render, screen} from '@testing-library/react-native'
import Counter from '../src/components/Counter'

afterEach(cleanup)

it('renders correctly after in/decrement action', () => {
  render(<Counter />)
  const {getByText} = screen

  const decrement = getByText(/decrement/i)
  const increment = getByText(/increment/i)
  const counterText = getByText(/Current count:/i)

  expect(counterText.props.children).toEqual(['Current count: ', 0])
  fireEvent.press(increment)
  expect(counterText.props.children).toEqual(['Current count: ', 1])
  fireEvent.press(decrement)
  expect(counterText.props.children).toEqual(['Current count: ', 0])
})
