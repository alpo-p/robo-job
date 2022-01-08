import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import RoboText from '../../../common/components/RoboText'

export const TextBubble: React.FC<{ text: string }> = ({ text }) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        backgroundColor: colors.card,
        padding: 8,
        marginLeft: 8,
        borderRadius: 16,
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <RoboText>{text}</RoboText>
    </View>
  )
}
