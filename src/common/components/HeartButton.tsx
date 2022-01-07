import { useTheme } from '@react-navigation/native'
import React from 'react'
import IconButton from './IconButton'

interface P {
  onPress: () => void
  isPressed: boolean
}

export default ({ onPress, isPressed }: P) => {
  const { colors } = useTheme()
  const heartIconName = isPressed ? 'heart' : 'heart-outline'
  return (
    <IconButton
      iconName={heartIconName}
      onPress={onPress}
      color={colors.primary}
    />
  )
}
