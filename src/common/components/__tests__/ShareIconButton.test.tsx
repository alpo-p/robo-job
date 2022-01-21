import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import ShareIconButton from '../ShareIconButton'

describe('ShareIconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = renderer.create(<ShareIconButton onPress={mockPress} />)
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = render(<ShareIconButton onPress={mockPress} />)
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
