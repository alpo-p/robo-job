import { Message } from '../common/types'

// For now, empty user messages will be returned as well and they will get replaced with user answers
const messages: Message[] = [
  {
    id: '0',
    typeOfMessage: 'robo',
    text: 'Here is the first message from the robo. It is a very long one yeah yo yeah',
    seen: false,
  },
  {
    id: '1',
    typeOfMessage: 'robo',
    text: 'Here is the first message from the robo. It is a very long one yeah yo yeah',
    seen: false,
  },
  {
    id: '2',
    typeOfMessage: 'user',
    text: '',
  },
  {
    id: '3',
    typeOfMessage: 'robo',
    text: 'Here is the second message from the robo',
    seen: false,
  },
  {
    id: '4',
    typeOfMessage: 'user',
    text: '',
  },
  {
    id: '5',
    typeOfMessage: 'recruiter',
    text: 'Would you be available for a phone meeting tomorrow 2pm?',
    seen: false,
  },
  {
    id: '6',
    typeOfMessage: 'user',
    text: '',
  },
]

export const getMockMessages = () => [...messages]
