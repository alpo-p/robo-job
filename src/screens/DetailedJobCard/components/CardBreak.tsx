import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

export default () => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        backgroundColor: colors.card,
        height: 16,
      }}
    />
  )
}
