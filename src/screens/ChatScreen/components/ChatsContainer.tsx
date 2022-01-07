/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { View } from 'react-native'
import { StateFilter } from '..'
import { IJobPostCard } from '../../../common/types'
import useLikedJobs from '../../../hooks/useLikedJobs'
import getMockJobCards from '../../../__mocks__/getMockJobCards'
import { ChatRow } from './ChatRow'

interface P {
  searchFilter: string
  stateFilter: StateFilter
}

export interface Row {
  onPress: () => void
  jobPost: IJobPostCard
}

// eslint-disable-next-line no-unused-vars
export default ({ searchFilter, stateFilter }: P) => {
  const { likedJobs } = useLikedJobs() // Confusingly this is ids
  const jobPosts = getMockJobCards()

  const likedJobPosts = jobPosts.filter(job => likedJobs.includes(job.id))

  const openChat = (id: string) => {
    console.log('opening chat for', id)
  }

  return (
    <View>
      {likedJobPosts.map(job => (
        <ChatRow key={job.id} onPress={() => openChat(job.id)} jobPost={job} />
      ))}
    </View>
  )
}
