import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import RoboText from '../../../common/components/RoboText'

interface P {
  text: string
}

export default ({ text }: P) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        backgroundColor: colors.card,
      }}
    >
      <RoboText>{text}</RoboText>
    </View>
  )
}
