import React from 'react'
import { ScrollView } from 'react-native'
import { IJobPostCard } from '../../../common/types'
import { useGetScreenHeight } from '../../../hooks/useGetScreenHeight'
import JobPostCard from './JobPostCard'

interface Props {
  cards: IJobPostCard[]
}

const JobPostCardsContainer: React.FC<Props> = ({ cards }) => {
  const height = useGetScreenHeight()
  return (
    <ScrollView
      disableScrollViewPanResponder
      snapToAlignment="start"
      snapToInterval={height}
      decelerationRate="fast"
      style={{ width: '100%' }}
      showsVerticalScrollIndicator={false}
    >
      {cards.map(card => (
        <JobPostCard key={card.id} jobPost={card} height={height} />
      ))}
    </ScrollView>
  )
}

export default JobPostCardsContainer
