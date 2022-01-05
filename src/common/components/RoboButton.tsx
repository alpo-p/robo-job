import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import RoboText from './RoboText'

interface Props {
  onPress: () => void
  title?: string
}

export const RoboButton: React.FC<Props> = ({ onPress, children, title }) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.card,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 16,
        borderColor: colors.border,
      }}
    >
      {title ? <RoboText>{title}</RoboText> : children}
    </TouchableOpacity>
  )
}
