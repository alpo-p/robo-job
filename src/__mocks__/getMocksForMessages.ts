import { Message } from '../common/types'

const roboMessages: Message[] = [
  {
    typeOfMessage: 'robo',
    text: `Thanks for your interest to the position and our company! To apply, please answer our 3 short questions 🙏

In short, we are looking for a seasoned marketing professional with mature views about the field. Could you explain shortly (280 words or less) how you view the modern marketing field and what's currently imporant?`,
  },
  {
    typeOfMessage: 'robo',
    text: `Thanks for the answer! Next up: explain your experience with modern marketing automation tools.`,
  },
  {
    typeOfMessage: 'robo',
    text: `Last question. From 1-10, rate how good you are at building marketing strategies. Also explain shortly why you chose the answer.

Note: by answering this question you'll apply to the position and your profile will be shared with the recruiter ✅`,
  },
]

const thanksForApplying: Message = {
  typeOfMessage: 'robo',
  text: 'Thanks for applying! Our recruiting manager will go through your answers ASAP. In the meanwhile, make sure that your profile is up to date 🔥',
}

const messageFromRecruiter: Message = {
  typeOfMessage: 'recruiter',
  text: 'Thanks for your interest! We really like your profile ☺️. Are you available for a phone interview tomorrow?',
}

interface P {
  roboMessages: Message[]
  thanksForApplying: Message
  messageFromRecruiter: Message
}

const getMocksForMessages = (): P => ({
  roboMessages,
  thanksForApplying,
  messageFromRecruiter,
})

export default getMocksForMessages
