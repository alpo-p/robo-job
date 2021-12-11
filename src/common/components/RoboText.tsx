import styled from 'styled-components/native'
import sharedStyles from '../styles'

type FontSize = 'small' | 'medium' | 'large'
type Colors = 'primaryDark' | 'primaryColorful'
type Weight = 'light' | 'normal' | 'bold'
interface Props {
  size?: FontSize
  color?: Colors
  weight?: Weight
}

const RoboText = styled.Text<Props>`
  font-family: ${({ weight }) => {
    if (weight === 'light') return 'DamascusLight'
    if (weight === 'bold') return 'DamascusBold'
    return 'Damascus'
  }};
  font-size: ${({ size }) => {
    if (size === 'small') return '16px'
    if (size === 'large') return '26px'
    return '20px'
  }};
  color: ${({ color }) => {
    if (color === 'primaryColorful') return sharedStyles.primaryColor
    return sharedStyles.darkGrey
  }};
`

export default RoboText
