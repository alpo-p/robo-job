import React from 'react'
import { View } from 'react-native'
import RoboText from '../../../common/components/RoboText'
import { IJobPostCard, Message } from '../../../common/types'
import useGetMessages from '../../../hooks/useGetMessages'

interface P {
  jobPost: IJobPostCard
}

const mockMessages: Message[] = [
  {
    typeOfMessage: 'robo',
    text: 'Here is the first message from the robo',
  },
  {
    typeOfMessage: 'user',
    text: '',
  },
  {
    typeOfMessage: 'robo',
    text: 'Here is the second message from the robo',
  },
  {
    typeOfMessage: 'user',
    text: '',
  },
]

interface Props {
  message: Message
}
const MessageComponent = ({ message }: Props) => {
  return <RoboText>{message.text}</RoboText>
}

export default ({ jobPost }: P) => {
  const messages = useGetMessages(jobPost.id)
  if (!messages) return null

  return (
    <View>
      {messages.map((m, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <MessageComponent key={i} message={m} />
      ))}
    </View>
  )
}
