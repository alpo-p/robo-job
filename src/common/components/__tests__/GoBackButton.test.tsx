import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import GoBackButton from '../GoBackButton'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import renderWithNavigation from '../../../testUtils/renderWithNavigation'

describe('GoBackButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(
      <GoBackButton onPress={mockPress} />,
    )
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = renderWithNavigation(
      <GoBackButton onPress={mockPress} />,
    )
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
