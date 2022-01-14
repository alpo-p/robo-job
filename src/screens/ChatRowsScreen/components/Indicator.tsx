import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import styles from '../../../common/styles'

interface P {
  type: 'unfinished' | 'unread'
}

export default ({ type }: P) => {
  const { colors } = useTheme()
  const size = 10
  const color =
    type === 'unfinished' ? styles.unfinishedYellow : colors.notification
  return (
    <View
      style={{
        backgroundColor: color,
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
