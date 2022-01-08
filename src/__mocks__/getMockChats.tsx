import { Chats, IndividualChat } from '../common/types'
import { getMockMessages } from './getMockMessages'

export const getMockChats = (n = 10): Chats => {
  const chats = [...Array(n).keys()].map(i => {
    const mockMessages = getMockMessages()
    const mockChat: IndividualChat = {
      jobPostId: `${i}`,
      messages: mockMessages,
    }

    return mockChat
  })
  console.log('c:', chats)

  return chats
}
