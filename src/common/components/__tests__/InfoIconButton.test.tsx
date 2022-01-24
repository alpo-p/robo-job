import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import InfoIconButton from '../InfoIconButton'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import renderWithNavigation from '../../../testUtils/renderWithNavigation'

describe('InfoIconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(
      <InfoIconButton onPress={mockPress} />,
    )
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = renderWithNavigation(
      <InfoIconButton onPress={mockPress} />,
    )
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
