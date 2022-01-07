import React from 'react'
import { ScrollView } from 'react-native'
import { useGetScreenHeightWithoutStatusBar } from '../../hooks/useGetScreenHeight'
import getMockJobCards from '../../__mocks__/getMockJobCards'
import JobPostCard from './JobPostCard'

const HomeScreen: React.FC = () => {
  const height = useGetScreenHeightWithoutStatusBar()
  const cards = getMockJobCards()
  return (
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
}

export default HomeScreen
