import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import RoboText from './RoboText'

interface Props {
  onPress: () => void
  title?: string
}

export const SignInButton: React.FC<Props> = ({ onPress, children, title }) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        padding: 16,
        borderWidth: 0.5,
        borderRadius: 8 * 4,
        alignItems: 'center',
      }}
    >
      {title ? (
        <RoboText size="medium" color="white">
          {title}
        </RoboText>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}
