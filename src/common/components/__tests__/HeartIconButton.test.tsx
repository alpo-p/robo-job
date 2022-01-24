import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import HeartIconButton from '../HeartIconButton'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import renderWithNavigation from '../../../testUtils/renderWithNavigation'

describe('HeartIconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(
      <HeartIconButton isPressed={false} onPress={mockPress} />,
    )
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = renderWithNavigation(
      <HeartIconButton isPressed={false} onPress={mockPress} />,
    )
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
