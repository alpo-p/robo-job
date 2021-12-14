import { IJobPostCard } from '../common/types'
import lorem280c from './getLoremIpsum280c'

const MockJobPostCard: IJobPostCard = {
  id: '123',
  companyName: 'The Incredible Company',
  jobTitle: 'Software developer',
  logoUrl: 'https://picsum.photos/100',
  tags: [
    'javascript',
    'software development',
    'react',
    'react native',
    'node.js',
  ],
  shortDescription: lorem280c,
}

export default function getSingleMockJobCard(): IJobPostCard {
  return { ...MockJobPostCard }
}
