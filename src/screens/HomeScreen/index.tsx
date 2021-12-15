import React from 'react'
import styled from 'styled-components/native'
import getMockJobCards from '../../__mocks__/getMockJobCards'
import JobPostCardsContainer from './components/JobPostCardsContainer'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const HomeScreen: React.FC = () => {
  const mockCards = getMockJobCards()
  return (
    <Container>
      <JobPostCardsContainer cards={mockCards} />
    </Container>
  )
}

export default HomeScreen
