/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { View } from 'react-native'
import { StateFilter } from '..'
import useLikedJobs from '../../../hooks/useLikedJobs'
import getMockJobCards from '../../../__mocks__/getMockJobCards'
import { ChatRow } from './ChatRow'

interface P {
  searchFilter: string
  stateFilter: StateFilter
}

// eslint-disable-next-line no-unused-vars
export default ({ searchFilter, stateFilter }: P) => {
  const { likedJobs } = useLikedJobs() // ids and boolean for unread and unfinished
  const jobPosts = getMockJobCards()

  const likedJobPosts = jobPosts.filter(job =>
    likedJobs.map(j => j.id).includes(job.id),
  )

  return (
    <View
      style={{
        marginTop: 8,
      }}
    >
      {likedJobPosts.map((job, i) => (
        <ChatRow key={job.id} jobPost={job} hasUnread={likedJobs[i].isUnread} />
      ))}
    </View>
  )
}
