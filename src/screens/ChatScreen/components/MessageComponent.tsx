import React from 'react'
import { IJobPostCard, Message } from '../../../common/types'
import RecruiterMessage from './RecruiterMessage'
import RoboMessage from './RoboMessage'
import UserMessage from './UserMessage'

interface Props {
  message: Message
  jobPost: IJobPostCard
}

export const MessageComponent: React.FC<Props> = ({ message, jobPost }) => {
  if (!message.text) return null
  if (message.typeOfMessage === 'user')
    return <UserMessage text={message.text} />
  if (message.typeOfMessage === 'recruiter')
    return <RecruiterMessage text={message.text} jobPost={jobPost} />
  return <RoboMessage text={message.text} />
}
