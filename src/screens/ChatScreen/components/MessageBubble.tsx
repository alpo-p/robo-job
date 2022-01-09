import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import RoboText from '../../../common/components/RoboText'

interface P {
  text: string
  noBackgroundColor?: boolean
}
export const MessageBubble: React.FC<P> = ({ text, noBackgroundColor }) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        backgroundColor: noBackgroundColor ? undefined : colors.card,
        borderColor: colors.card,
        borderWidth: 1,
        padding: 10,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 16,
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <RoboText>{text}</RoboText>
    </View>
  )
}
