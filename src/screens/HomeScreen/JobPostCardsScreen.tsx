import React from 'react'
import { ScrollView } from 'react-native'
import { IJobPostCard } from '../../common/types'
import JobPostCard from './JobPostCard'

interface P {
  cards: IJobPostCard[]
  height: number
}

export default ({ cards, height }: P) => (
  // This scrollview handles the "tiktok-like" behaviour
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
