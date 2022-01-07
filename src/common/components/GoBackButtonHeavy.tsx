import { useTheme } from '@react-navigation/native'
import React from 'react'
import IconButton from './IconButton'

interface P {
  onPress: () => void
  color?: 'black'
}
export default ({ onPress, color }: P) => {
  const { colors } = useTheme()
  return (
    <IconButton
      iconName="md-arrow-back-circle"
      onPress={onPress}
      color={color ?? colors.primary}
      style={{
        alignSelf: 'flex-start',
        marginLeft: 8,
        position: 'absolute',
        zIndex: 1,
        top: 48,
      }}
    />
  )
}