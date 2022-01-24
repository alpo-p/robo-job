import { JSXElementConstructor, ReactElement } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react-native'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export default (children: PropType) => {
  return render(children)
}
