import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import IconButton from '../IconButton'
import renderWithNavigation from '../../../testUtils/renderWithNavigation'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'

describe('IconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(
      <IconButton iconName="flower" onPress={mockPress} />,
    )
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = renderWithNavigation(
      <IconButton iconName="flower" onPress={mockPress} />,
    )
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
