import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import GoBackButton from '../GoBackButton'

describe('GoBackButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = renderer.create(<GoBackButton onPress={mockPress} />)
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = render(<GoBackButton onPress={mockPress} />)
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
