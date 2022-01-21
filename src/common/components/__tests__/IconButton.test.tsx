import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import IconButton from '../IconButton'

describe('IconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = renderer.create(
      <IconButton iconName="flower" onPress={mockPress} />,
    )
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = render(
      <IconButton iconName="flower" onPress={mockPress} />,
    )
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
