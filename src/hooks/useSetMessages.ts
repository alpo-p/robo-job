import { IndividualChat, Message } from '../common/types'
import useChatsContext from './useChatsContext'

// This sets the chat messages for the provided id
// if messages is empty array, it empties the messages for the jobPostId
export default (jobPostId: string, messages: Message[]): void => {
  const { setChats } = useChatsContext()

  setChats(chats => {
    const newChatObject: IndividualChat = {
      jobPostId,
      messages,
    }

    // If the chat is empty for the jobPostId, make a new object
    const currentChatObject = chats.find(chat => chat.jobPostId === jobPostId)
    if (!currentChatObject) {
      return chats.concat(newChatObject)
    }

    // If the chat is NOT empty for the jobPostId, replace the old object with a new
    return chats.map(chat =>
      chat.jobPostId === jobPostId ? newChatObject : chat,
    )
  })
}
