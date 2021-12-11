import React from 'react'
import { ScrollView } from 'react-native'
import { JobPostCardType } from '../../../common/types'
import JobPostCard from './JobPostCard'

interface Props {
  cards: JobPostCardType[]
}

const JobPostCardsContainer: React.FC<Props> = ({ cards }) => {
  return (
    <ScrollView>
      {cards.map(card => (
        <JobPostCard jobPost={card} />
      ))}
    </ScrollView>
  )
}

export default JobPostCardsContainer
