import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import InfoIconButton from '../InfoIconButton'

describe('InfoIconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = renderer.create(<InfoIconButton onPress={mockPress} />)
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = render(<InfoIconButton onPress={mockPress} />)
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
