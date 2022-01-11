import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

export default () => {
  const { colors } = useTheme()
  const size = 10
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        height: size,
        width: size,
        borderRadius: size / 2,
        alignSelf: 'center',
        marginBottom: 8,
        marginRight: 8,
      }}
    />
  )
}
