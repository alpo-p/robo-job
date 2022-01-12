import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import RoboText from '../../common/components/RoboText'

export const SearchButton: React.FC<ButtonProps> = ({ onPress }) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignSelf: 'center',
        width: '91%',
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 8 * 1,
        alignItems: 'center',
      }}
    >
      <RoboText size="medium" weight="bold" color="white" uppercase>
        Search
      </RoboText>
    </TouchableOpacity>
  )
}
interface ButtonProps {
  onPress: () => void
}
