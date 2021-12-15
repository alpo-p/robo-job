import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { IJobPostCard } from '../../../common/types'
import { useGetScreenHeightWithoutStatusBar } from '../../../hooks/useGetScreenHeight'
import JobPostCard from './JobPostCard'

interface Props {
  cards: IJobPostCard[]
}

const JobPostCardsContainer: React.FC<Props> = ({ cards }) => {
  const height = useGetScreenHeightWithoutStatusBar()
  const { width } = Dimensions.get('screen')
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
        <JobPostCard
          key={card.id}
          jobPost={card}
          height={height}
          width={width}
        />
      ))}
    </ScrollView>
  )
}

export default JobPostCardsContainer
