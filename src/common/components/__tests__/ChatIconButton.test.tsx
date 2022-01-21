import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import ChatIconButton from '../ChatIconButton'

describe('ChatIconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = renderer.create(<ChatIconButton onPress={mockPress} />)
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = render(<ChatIconButton onPress={mockPress} />)
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
