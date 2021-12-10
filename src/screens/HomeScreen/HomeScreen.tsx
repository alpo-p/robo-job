import React from 'react'
import { SafeContainer } from '../../common/components/SafeContainer'
import getMockJobCards from '../../__mocks__/getMockJobCards'
import JobPostCardsContainer from './components/JobPostCardsContainer'

const HomeScreen: React.FC = () => {
  const mockCards = getMockJobCards()
  return (
    <SafeContainer>
      <JobPostCardsContainer cards={mockCards} />
    </SafeContainer>
  )
}

export default HomeScreen
