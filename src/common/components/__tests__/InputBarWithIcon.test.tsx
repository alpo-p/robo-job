import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import InputBarWithIcon from '../InputBarWithIcon'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import renderWithNavigation from '../../../testUtils/renderWithNavigation'

describe('InputBarWithIcon', () => {
  const value = 'test'
  const setValue = jest.fn()

  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(
      <InputBarWithIcon iconName="flower" value={value} setValue={setValue} />,
    )
    expect(tree).toMatchSnapshot()
  })

  it('should call setValue when edited', () => {
    const placeholderText = 'test placeholder'

    const { getByPlaceholderText } = renderWithNavigation(
      <InputBarWithIcon
        iconName="flower"
        value={value}
        setValue={setValue}
        placeholderText={placeholderText}
      />,
    )

    fireEvent.changeText(getByPlaceholderText(placeholderText), 'testi')
    expect(setValue).toHaveBeenCalledWith('testi')
  })
})
