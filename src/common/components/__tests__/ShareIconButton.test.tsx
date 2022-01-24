import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import ShareIconButton from '../ShareIconButton'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import renderWithNavigation from '../../../testUtils/renderWithNavigation'

describe('ShareIconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(
      <ShareIconButton onPress={mockPress} />,
    )
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = renderWithNavigation(
      <ShareIconButton onPress={mockPress} />,
    )
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
