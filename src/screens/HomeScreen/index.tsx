import React from 'react'
import { View } from 'react-native'
import { useGetScreenHeightWithoutStatusBar } from '../../hooks/useGetScreenHeight'
import getMockJobCards from '../../__mocks__/getMockJobCards'
import JobPostCardsScreen from './JobPostCardsScreen'
import SwipeHintAnimation from './SwipeHintAnimation'

const HomeScreen: React.FC = () => {
  const height = useGetScreenHeightWithoutStatusBar()
  const cards = getMockJobCards()

  return (
    <View>
      <SwipeHintAnimation />
      <JobPostCardsScreen height={height} cards={cards} />
    </View>
  )
}

export default HomeScreen
