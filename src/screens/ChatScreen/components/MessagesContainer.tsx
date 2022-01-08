import React from 'react'
import { View } from 'react-native'
import RoboText from '../../../common/components/RoboText'
import { IJobPostCard } from '../../../common/types'
import useGetMessages from '../../../hooks/useGetMessages'

interface P {
  jobPost: IJobPostCard
}

export default ({ jobPost }: P) => {
  const messages = useGetMessages(jobPost.id)
  if (!messages) return null
  return (
    <View>
      {messages.map(message => (
        <RoboText>{message.text}</RoboText>
      ))}
    </View>
  )
}
