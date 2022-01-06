import React from 'react'
import { View } from 'react-native'
import getMockJobCards from '../../__mocks__/getMockJobCards'
import JobPostCardsContainer from './components/JobPostCardsContainer'

const HomeScreen: React.FC = () => {
  const mockCards = getMockJobCards()
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <JobPostCardsContainer cards={mockCards} />
    </View>
  )
}

export default HomeScreen
