import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import InputBarWithIcon from '../InputBarWithIcon'

describe('InputBarWithIcon', () => {
  const value = 'test'
  const setValue = jest.fn()

  it('should match snapshot', () => {
    const tree = renderer.create(
      <InputBarWithIcon iconName="flower" value={value} setValue={setValue} />,
    )
    expect(tree).toMatchSnapshot()
  })

  it('should call setValue when edited', () => {
    const placeholderText = 'test placeholder'

    const { getByPlaceholderText } = render(
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
