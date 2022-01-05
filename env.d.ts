import { ThemeColor } from './src/common/themes'

declare module '@env' {
  export const IOS_CLIENT_ID: string
}

// This is declared so typings on the themes work when using useTheme()
/**
 * 
 * doesnt work as of now
declare module '@react-navigation/native' {
  export interface Theme {
    colors: keyof ThemeColor
  }
}
*/
