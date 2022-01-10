/* eslint-disable no-await-in-loop */
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { IJobPostCard, Message } from '../../../common/types'
import AnswerInputBar from './AnswerInputBar'
import { MessageComponent } from './MessageComponent'

interface P {
  jobPost: IJobPostCard
}

const initialRoboMessages: Message[] = [
  {
    typeOfMessage: 'robo',
    text: 'Here is the first message from the robo. It is a very long one yeah yo yeah',
  },
  {
    typeOfMessage: 'robo',
    text: "Here's a second message. Yeeeea h buddy ueah yeayh eau siudasidu asid iuasd iasjd oasj",
  },
  {
    typeOfMessage: 'robo',
    text: 'Here is the third message from the robo. It is a very long one yeah yo yeah',
  },
]

export default ({ jobPost }: P) => {
  const [shownMessages, setShownMessages] = useState<Message[]>([] as Message[])
  const [answer, setAnswer] = useState<string>('')

  const handleSendAnswer = () => {
    const userMessage: Message = {
      typeOfMessage: 'user',
      text: answer,
    }
    setShownMessages(m => m.concat(userMessage))
    setAnswer('')
  }

  useEffect(() => {
    const messageToShow = initialRoboMessages[0]
    setShownMessages(m => m.concat(messageToShow))
  }, [])

  // TODO: refactor keyboardavoidingview
  return (
    <KeyboardAvoidingView
      style={{
        height: '92%',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        {shownMessages.map((m, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <MessageComponent key={i} message={m} jobPost={jobPost} />
        ))}
      </ScrollView>
      <AnswerInputBar
        value={answer}
        onChangeText={setAnswer}
        handleSendAnswer={handleSendAnswer}
      />
    </KeyboardAvoidingView>
  )
}
