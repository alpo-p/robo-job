import { Message } from '../common/types'

// For now, empty user messages will be returned as well and they will get replaced with user answers
const messages: Message[] = [
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

export const getMockMessages = () => [...messages]
