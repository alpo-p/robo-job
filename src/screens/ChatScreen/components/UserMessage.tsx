import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MessageBubble } from './MessageBubble'

interface P {
  text: string
}

export default ({ text }: P) => {
  return (
    <View style={stylesheet.wrapper}>
      <MessageBubble text={text} noBackgroundColor />
    </View>
  )
}

const stylesheet = StyleSheet.create({
  wrapper: {
    margin: 8,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
})
