import React from 'react'
import { View } from 'react-native'
import RoboText from '../../../common/components/RoboText'
import { TextBubble } from './TextBubble'

interface P {
  text: string
  name: string
  avatar: React.ReactNode
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
        }}
      >
        <View
          style={{
            justifyContent: 'flex-end',
          }}
        >
          {avatar}
        </View>
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
