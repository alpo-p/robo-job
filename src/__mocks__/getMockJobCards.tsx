import { JobPostCardType } from '../common/types'
import getMockJobPostCard from './getSingleMockJobCard'

const mockCard1 = getMockJobPostCard()
const mockCard2 = getMockJobPostCard()
mockCard2.jobTitle = 'Javascript developer'
mockCard2.id = '321'
const MockJobPostCards = [mockCard1, mockCard2]

export default function getMockJobCards(): JobPostCardType[] {
  return [...MockJobPostCards]
}
