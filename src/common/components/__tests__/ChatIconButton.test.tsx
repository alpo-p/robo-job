import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/react-native'
import ChatIconButton from '../ChatIconButton'
import renderWithNavigation from '../../../testUtils/renderWithNavigation'

describe('ChatIconButton', () => {
  const mockPress = jest.fn()

  it('should match snapshot', () => {
    const tree = renderer.create(<ChatIconButton onPress={mockPress} />)
    expect(tree).toMatchSnapshot()
  })
  it('should register a press', () => {
    const { container } = renderWithNavigation(
      <ChatIconButton onPress={mockPress} />,
    )
    fireEvent.press(container)
    expect(mockPress).toHaveBeenCalledTimes(1)
  })
})
