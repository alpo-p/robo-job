/* eslint-disable no-await-in-loop */
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { IJobPostCard, Message } from '../../../common/types'
import useGetMessages from '../../../hooks/useGetMessages'
import useSetMessages from '../../../hooks/useSetMessages'
import waitSeconds from '../../../utils/waitSeconds'
import { MessageComponent } from './MessageComponent'

interface P {
  jobPost: IJobPostCard
}

export default ({ jobPost }: P) => {
  const messages = useGetMessages(jobPost.id)
  const [shownMessages, setShownMessages] = useState<Message[]>([] as Message[])
  const [showMessagesUntilId, setShowMessagesUntilId] = useState<number>()
  const setMessages = useSetMessages(jobPost.id)

  const setMessageAsSeen = (index: number) => {
    const editedMessages = [...messages]
    messages[index].seen = true
    setMessages(editedMessages)
  }

  // All of this doesn't work
  // Maybe something totally else is needed
  // Simplify a lot!!!

  if (!messages) return null
  useEffect(() => {
    const firstUserMessageId = messages.findIndex(
      msg => msg.typeOfMessage === 'user',
    )
    setShowMessagesUntilId(firstUserMessageId)
    console.log(showMessagesUntilId)

    async function renderMessages() {
      const showUntil = showMessagesUntilId ?? 0
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < showUntil; i++) {
        const msg = messages[i]
        if (msg.typeOfMessage === 'robo' && !msg.seen) {
          setShownMessages(m => m.concat(msg))
          setMessageAsSeen(i)
          await waitSeconds(2)
        }
      }
    }
    renderMessages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View>
      {shownMessages.map((m, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <MessageComponent key={i} message={m} jobPost={jobPost} />
      ))}
    </View>
  )
}
