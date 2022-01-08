import React from 'react'
import { View } from 'react-native'
import { IJobPostCard } from '../../../common/types'
import useGetMessages from '../../../hooks/useGetMessages'
import { MessageComponent } from './MessageComponent'

interface P {
  jobPost: IJobPostCard
}

export default ({ jobPost }: P) => {
  const messages = useGetMessages(jobPost.id)
  if (!messages) return null

  return (
    <View>
      {messages.map((m, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <MessageComponent key={i} message={m} jobPost={jobPost} />
      ))}
    </View>
  )
}
