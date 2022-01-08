import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { HorizontalSpaceOf8 } from '../../../common/components/HorizontalSpaceOf8'
import RoboText from '../../../common/components/RoboText'

interface P {
  text: string
  name: string
  avatar: React.ReactNode
}

const TextBubble: React.FC<{ text: string }> = ({ text }) => {
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

// TODO: clean up this file, horrible
export default ({ text, name, avatar }: P) => {
  return (
    <View
      style={{
        margin: 8,
        maxWidth: '80%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          bottom: 0,
          top: 0,
          left: 0,
        }}
      >
        {avatar}
        <TextBubble text={text} />
      </View>
      <View
        style={{
          marginTop: 4,
          marginLeft: 40,
        }}
      >
        <RoboText weight="light">{name}</RoboText>
      </View>
    </View>
  )
}
