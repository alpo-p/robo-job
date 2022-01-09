import React from 'react'
import { View, StyleSheet } from 'react-native'
import RoboText from '../../../common/components/RoboText'
import { MessageBubble } from './MessageBubble'

interface P {
  text: string
  name: string
  avatar: React.ReactNode
}

// TODO: clean up this file, horrible
export default ({ text, name, avatar }: P) => (
  <View style={stylesheet.wrapper}>
    <View style={stylesheet.avatarAndMessage}>
      <View style={stylesheet.avatar}>{avatar}</View>
      <MessageBubble text={text} />
    </View>
    <View style={stylesheet.name}>
      <RoboText weight="light">{name}</RoboText>
    </View>
  </View>
)

const stylesheet = StyleSheet.create({
  wrapper: {
    margin: 8,
    maxWidth: '80%',
  },
  avatarAndMessage: {
    flexDirection: 'row',
  },
  avatar: {
    justifyContent: 'flex-end',
  },
  name: {
    marginTop: 4,
    marginLeft: 40,
  },
})
