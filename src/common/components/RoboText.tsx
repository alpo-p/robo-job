import React from 'react'
import { useTheme } from '@react-navigation/native'
import { Text, TextStyle } from 'react-native'

type FontSize = 'tiny' | 'small' | 'medium' | 'large'
type Weight = 'light' | 'normal' | 'bold'
interface Props {
  size?: FontSize
  color?: string
  weight?: Weight
  uppercase?: boolean
  style?: TextStyle
}

const fontSizes = {
  tiny: 12,
  small: 14,
  medium: 16,
  large: 20,
}

const fontFamilies = {
  light: 'DamascusLight',
  normal: 'Damascus',
  bold: 'DamascusBold',
}

const RoboText: React.FC<Props> = ({
  size = 'small',
  color,
  weight = 'normal',
  uppercase,
  children,
  style,
}) => {
  const { colors } = useTheme()

  const fontSize = fontSizes[size]
  const fontColor = color ?? colors.text
  const fontFamily = fontFamilies[weight]
  const upcase = uppercase ? 'uppercase' : 'none'
  return (
    <Text
      style={{
        ...style,
        fontSize,
        color: fontColor,
        fontFamily,
        textTransform: upcase,
      }}
    >
      {children}
    </Text>
  )
}

export default RoboText
