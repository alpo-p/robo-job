import React from 'react'
import { FlatList } from 'react-native'
import { TJobPostCard } from '../../../common/types'
import JobPostCard from './JobPostCard'

interface Props {
  cards: TJobPostCard[]
}

const JobPostCardsContainer: React.FC<Props> = ({ cards }) => {
  return (
    <FlatList
      data={cards}
      style={{ width: '99%', borderWidth: 1, borderColor: 'red' }}
      renderItem={({ item }) => <JobPostCard jobPost={item} />}
      keyExtractor={i => i.id}
    />
  )
}

export default JobPostCardsContainer
