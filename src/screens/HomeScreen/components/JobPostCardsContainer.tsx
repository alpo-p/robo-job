import React from 'react'
import { ScrollView } from 'react-native'
import { JobPostCardType } from '../../../common/types'
import { useGetScreenHeight } from '../../../hooks/useGetScreenHeight'
import JobPostCard from './JobPostCard'

interface Props {
  cards: JobPostCardType[]
}

const JobPostCardsContainer: React.FC<Props> = ({ cards }) => {
  const height = useGetScreenHeight()
  return (
    <ScrollView
      disableScrollViewPanResponder
      snapToAlignment="start"
      snapToInterval={height}
      decelerationRate="fast"
    >
      {cards.map(card => (
        <JobPostCard jobPost={card} height={height} />
      ))}
    </ScrollView>
  )
}

export default JobPostCardsContainer
