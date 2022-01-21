import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import HeartIconButton from '../HeartIconButton'

describe('HeartIconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = renderer.create(
      <HeartIconButton isPressed={false} onPress={mockPress} />,
    )
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = render(
      <HeartIconButton isPressed={false} onPress={mockPress} />,
    )
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
