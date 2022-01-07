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
    primary: styles.primaryColorDarkened30,
    text: styles.darkText,
    background: styles.white,
    card: styles.lightGrey,
  },
}

export const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: styles.primaryColorLightened20,
    text: styles.whiteText,
    card: styles.darkGrey,
    border: '#121212',
  },
}
