import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import RoboText from '../../../common/components/RoboText'

export const SearchButton: React.FC<ButtonProps> = ({ onPress }) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        width: '91.5%',
        backgroundColor: colors.primary,
        borderRadius: 8 * 1,
        alignItems: 'center',
        height: 8 * 5,
        marginTop: 8 * 2,
      }}
    >
      <RoboText size="small" weight="bold" color="white" uppercase>
        Search
      </RoboText>
    </TouchableOpacity>
  )
}
interface ButtonProps {
  onPress: () => void
}
