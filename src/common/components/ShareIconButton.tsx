import { useTheme } from '@react-navigation/native'
import React from 'react'
import IconButton from './IconButton'

interface P {
  onPress: () => void
}

export default ({ onPress }: P) => {
  const { colors } = useTheme()
  return (
    <IconButton
      iconName="share-social-outline"
      onPress={onPress}
      color={colors.primary}
    />
  )
}
