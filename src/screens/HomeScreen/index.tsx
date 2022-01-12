import React from 'react'
import { useGetScreenHeightWithoutStatusBar } from '../../hooks/useGetScreenHeight'
import getMockJobCards from '../../__mocks__/getMockJobCards'
import JobPostCardsScreen from './JobPostCardsScreen'

const HomeScreen: React.FC = () => {
  const height = useGetScreenHeightWithoutStatusBar()
  const cards = getMockJobCards()
  return <JobPostCardsScreen height={height} cards={cards} />
}

export default HomeScreen
