import { IJobPostCard } from '../common/types'
import getMockJobPostCard from './getSingleMockJobCard'

export default function getMockJobCards(n = 10): IJobPostCard[] {
  const mockJobPostCards = [...Array(n).keys()].map(i => {
    const mockCard = getMockJobPostCard()
    mockCard.id = `${i}`
    mockCard.jobTitle = `Software developer #${i}`
    return mockCard
  })
  return mockJobPostCards
}
