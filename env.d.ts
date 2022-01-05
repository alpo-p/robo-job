import { ThemeColor } from './src/common/themes'

declare module '@env' {
  export const IOS_CLIENT_ID: string
}

// This is declared so typings on the themes work when using useTheme()
declare module '@react-navigation/native' {
  export interface Theme {
    colors: ThemeColor
  }
}
