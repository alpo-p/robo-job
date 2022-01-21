/* eslint-disable import/no-extraneous-dependencies */
import { JSXElementConstructor, ReactElement } from 'react'
import renderer from 'react-test-renderer'

type PropType = ReactElement<any, string | JSXElementConstructor<any>>

const mockedNavigate = jest.fn()

const mockedTheme = {
  colors: {
    primary: '#000000',
    background: '#000000',
    card: '#000000',
    text: '#000000',
    border: '#000000',
    notification: '#000000',
  },
}

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useTheme: () => mockedTheme,
    useColorScheme: () => 'dark',
  }
})

const renderWithNavigation = (children: PropType) => {
  return renderer.create(children)
}

export default renderWithNavigation
