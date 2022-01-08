import { Message } from '../common/types'

// For now, empty user messages will be returned as well and they will get replaced with user answers
const messages: Message[] = [
  {
    typeOfMessage: 'robo',
    text: 'Here is the first message from the robo. It is a very long one yeah yo yeah',
  },
  {
    typeOfMessage: 'user',
    text: 'Here is the first message from the user',
  },
  {
    typeOfMessage: 'robo',
    text: 'Here is the second message from the robo',
  },
  {
    typeOfMessage: 'user',
    text: 'Here is the second message from the user',
  },
  {
    typeOfMessage: 'recruiter',
    text: 'Would you be available for a phone meeting tomorrow 2pm?',
  },
  {
    typeOfMessage: 'user',
    text: 'Yes definitely!',
  },
]

export const getMockMessages = () => [...messages]
