import { Chats } from '../common/types'
import { getMockMessages } from './getMockMessages'

export const getMockChats = (): Chats => {
  const messages0 = getMockMessages()
  const messages1 = getMockMessages()
  const chats: Chats = [
    {
      jobPostId: '0',
      messages: messages0,
    },
    {
      jobPostId: '1',
      messages: messages1,
    },
  ]
  return chats
}
