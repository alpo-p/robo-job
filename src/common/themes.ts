import {
  DarkTheme as DefaultDarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import styles from './styles'

export type ThemeColors = {
  primary: string
  background: string
  card: string
  text: string
  border: string
  notification: string
}

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: styles.primaryColor,
    text: styles.darkText,
    icon: '#121212',
    background: styles.white,
  },
}

export const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: styles.primaryColor,
    text: styles.whiteText,
    card: '#121212',
    border: '#121212',
    icon: styles.whiteText,
  },
}
