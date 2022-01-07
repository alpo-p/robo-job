import { useTheme } from '@react-navigation/native'
import React from 'react'
import IconButton from './IconButton'

interface P {
  onPress: () => void
  smaller: boolean
}

export default ({ onPress, smaller }: P) => {
  const { colors } = useTheme()
  return (
    <IconButton
      iconName="ios-information-circle-outline"
      onPress={onPress}
      color={colors.primary}
      size={smaller ? 30 : undefined}
    />
  )
}
