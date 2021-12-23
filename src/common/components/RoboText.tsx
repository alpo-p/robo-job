import styled from 'styled-components/native'
import sharedStyles from '../styles'

type FontSize = 'tiny' | 'small' | 'medium' | 'large'
type Colors = 'primaryWhite' | 'primaryDark' | 'primaryColorful'
type Weight = 'light' | 'normal' | 'bold'
interface Props {
  size?: FontSize
  color?: Colors
  weight?: Weight
  uppercase?: boolean
}

const RoboText = styled.Text<Props>`
  font-family: ${({ weight }) => {
    if (weight === 'light') return 'DamascusLight'
    if (weight === 'bold') return 'DamascusBold'
    return 'Damascus'
  }};
  font-size: ${({ size }) => {
    if (size === 'tiny') return '12px'
    if (size === 'small') return '14px'
    if (size === 'medium') return '16px'
    if (size === 'large') return '20px'
    return '14px'
  }};
  color: ${({ color }) => {
    if (color === 'primaryColorful') return sharedStyles.primaryColor
    if (color === 'primaryDark') return sharedStyles.darkGrey
    return sharedStyles.white
  }};
  text-transform: ${({ uppercase }) => {
    if (uppercase) return 'uppercase'
    return 'none'
  }};
`

export default RoboText
