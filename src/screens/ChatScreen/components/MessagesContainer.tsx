import React, { useContext, useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { IJobPostCard, Message } from '../../../common/types'
import { GlobalBooleansContext } from '../../../contexts/GlobalBooleansProvider'
import useGetMessages from '../../../hooks/useGetMessages'
import { useSetAsReadOrUnread } from '../../../hooks/useLikedJobs'
import useSetMessages from '../../../hooks/useSetMessages'
import waitSeconds from '../../../utils/waitSeconds'
import getMocksForMessages from '../../../__mocks__/getMocksForMessages'
import AnswerInputBar from './AnswerInputBar'
import { MessageComponent } from './MessageComponent'

interface P {
  jobPost: IJobPostCard
}

// TODO: refactor or something. This is a mess
export default ({ jobPost }: P) => {
  const scrollViewRef = useRef<ScrollView | null>(null)
  const { setGlobalBooleans } = useContext(GlobalBooleansContext)
  const messagesFromContext = useGetMessages(jobPost.id)
  const setMessagesToContext = useSetMessages(jobPost.id)
  const { setAsRead, setAsUnread } = useSetAsReadOrUnread(jobPost.id)

  const { roboMessages, thanksForApplying, messageFromRecruiter } =
    getMocksForMessages()

  const [shownMessages, setShownMessages] = useState<Message[]>([] as Message[])
  const [answer, setAnswer] = useState<string>('')
  const [iOfRoboMsgToShow, setIOfRoboMsgToShow] = useState<number>(0)
  const [isApplying, setIsApplying] = useState<boolean>(false)
  const [hasApplied, setHasApplied] = useState<boolean>(false)

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
      setGlobalBooleans(s => {
        const state = s
        state.showProfileBadge = true
        return state
      })
      setAsUnread()
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
      setAsRead()
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
