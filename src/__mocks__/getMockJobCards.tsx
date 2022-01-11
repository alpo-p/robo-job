/* eslint-disable no-param-reassign */
import { IJobPostCard } from '../common/types'
import getMockJobPostCard, {
  mockCompanies,
  mockPositions,
} from './getSingleMockJobCard'

// Old
export function getMockJobCards2(n = 10): IJobPostCard[] {
  const mockJobPostCards = [...Array(n).keys()].map(i => {
    const mockCard = getMockJobPostCard()
    mockCard.id = `${i}`
    mockCard.jobTitle = `Software developer #${i}`
    return mockCard
  })
  return mockJobPostCards
}

// @ts-ignore
function swapElement(array, indexA, indexB) {
  const tmp = array[indexA]
  array[indexA] = array[indexB]
  array[indexB] = tmp
}

// Creates a combination of 3 positions and 3 companies or 9 unique job posts
export default function getMockJobCards(): IJobPostCard[] {
  const positions = [...mockPositions]
  const companies = [...mockCompanies]

  const jobCards = [] as IJobPostCard[]
  positions.forEach((position, i) => {
    companies.forEach((company, j) => {
      const id = `${i}asd${j}dsa${i}`
      const jobCard = { id, ...position, ...company }
      jobCards.push(jobCard)
    })
  })
  swapElement(jobCards, 0, 3)
  swapElement(jobCards, 1, 7)
  swapElement(jobCards, 3, 8)
  return jobCards
}
