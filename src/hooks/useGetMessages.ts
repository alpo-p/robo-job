import { Message } from '../common/types'
import useChatsContext from './useChatsContext'

// this is used to get messages for certain jobJobId
export default (id: string): Message[] | null => {
  const { chats } = useChatsContext()

  const thisChat = chats?.find(chat => chat.jobPostId === id)
  if (!thisChat) return null

  return thisChat.messages
}
