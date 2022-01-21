import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IJobPostCard } from '../../common/types'
import ChatTopBar from './components/ChatTopBar'
import MessagesContainer from './components/MessagesContainer'

export interface ChatScreenProps {
  route: RouteProp<{ params: { jobPost: IJobPostCard } }, 'params'>
}

export default ({
  route: {
    params: { jobPost },
  },
}: ChatScreenProps) => (
  <SafeAreaView>
    <ChatTopBar jobPost={jobPost} />
    <MessagesContainer jobPost={jobPost} />
  </SafeAreaView>
)
