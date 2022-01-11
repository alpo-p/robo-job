import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import IconButton from '../../../common/components/IconButton'
import styles from '../../../common/styles'

interface P {
  show?: boolean
  onPress: () => void
}

export default ({ show, onPress }: P) => {
  const height = 6 * 8
  const { colors } = useTheme()
  return (
    <View
      style={{
        height,
        display: !show ? 'none' : undefined,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        marginRight: 1 * 8,
      }}
    >
      <IconButton
        size={height}
        iconName="checkmark"
        onPress={onPress}
        color={styles.successGreen}
      />
    </View>
  )
}
