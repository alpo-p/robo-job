import React, { useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { IJobPostCard, Message } from '../../../common/types'
import useGetMessages from '../../../hooks/useGetMessages'
import useSetMessages from '../../../hooks/useSetMessages'
import waitSeconds from '../../../utils/waitSeconds'
import AnswerInputBar from './AnswerInputBar'
import { MessageComponent } from './MessageComponent'

interface P {
  jobPost: IJobPostCard
}

const roboMessages: Message[] = [
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

const thanksForApplying: Message = {
  typeOfMessage: 'robo',
  text: 'Thanks for applying! Our recruiting manager will go through your answers ASAP. In the meanwhile, check that your profile is up to date',
}

const messageFromRecruiter: Message = {
  typeOfMessage: 'recruiter',
  text: 'Thanks for your interest! We really like you. Are you available for a phone interview tomorrow?',
}

export default ({ jobPost }: P) => {
  const scrollViewRef = useRef<ScrollView | null>(null)
  const messagesFromContext = useGetMessages(jobPost.id)
  const setMessagesToContext = useSetMessages(jobPost.id)

  const [shownMessages, setShownMessages] = useState<Message[]>([] as Message[])
  const [answer, setAnswer] = useState<string>('')
  const [iOfRoboMsgToShow, setIOfRoboMsgToShow] = useState<number>(0)
  const [isApplying, setIsApplying] = useState<boolean>(false)
  const [hasApplied, setHasApplied] = useState<boolean>(false)

  console.log(messagesFromContext)

  const handleSendAnswer = async () => {
    const userMessage: Message = {
      typeOfMessage: 'user',
      text: answer,
    }
    setShownMessages(m => m.concat(userMessage))
    setAnswer('')

    // Looks cooler when there's a small delay between receiving the msg from robot
    await waitSeconds(1)

    if (isApplying) {
      setHasApplied(true)
      setIsApplying(false)
      const messagesInTheEnd = shownMessages
        .concat(userMessage)
        .concat(thanksForApplying)
        .concat(messageFromRecruiter)
      setMessagesToContext(messagesInTheEnd)
      setShownMessages(m => m.concat(thanksForApplying))
    }

    if (!hasApplied) {
      const nextIndex = iOfRoboMsgToShow + 1

      if (nextIndex < roboMessages.length) {
        setShownMessages(m => m.concat(roboMessages[nextIndex]))
        setIOfRoboMsgToShow(nextIndex)
      }

      if (nextIndex === roboMessages.length - 1) {
        setIsApplying(true)
      }
    }
  }

  useEffect(() => {
    if (messagesFromContext.length === 0) {
      const messageToShow = roboMessages[iOfRoboMsgToShow]
      setShownMessages(m => m.concat(messageToShow))
    } else {
      setShownMessages(messagesFromContext)
      setHasApplied(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // TODO: refactor keyboardavoidingview
  // TODO: replace scrollview with flatlist?
  return (
    <KeyboardAvoidingView
      style={{
        height: '92%',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({ animated: true })
        }
      >
        {shownMessages.map((m, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <MessageComponent key={i} message={m} jobPost={jobPost} />
        ))}
      </ScrollView>
      <AnswerInputBar
        value={answer}
        onChangeText={setAnswer}
        handleSendAnswer={handleSendAnswer}
        isApplying={isApplying}
      />
    </KeyboardAvoidingView>
  )
}
