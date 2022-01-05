import {
  DarkTheme as DefaultDarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import styles from './styles'

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: styles.primaryColor,
    text: styles.darkText,
  },
}

export const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: styles.primaryColor,
    text: styles.whiteText,
    card: '#121212',
  },
}
