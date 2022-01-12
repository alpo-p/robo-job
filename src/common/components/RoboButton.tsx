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
        borderRadius: 8 * 1,
        alignItems: 'center',
      }}
    >
      {title ? (
        <RoboText size="medium" weight="bold" color="white" uppercase>
          {title}
        </RoboText>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}
