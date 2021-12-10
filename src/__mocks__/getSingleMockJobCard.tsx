import { TJobPostCard } from '../common/types'
import lorem280c from './getLoremIpsum280c'

const MockJobPostCard: TJobPostCard = {
  id: '123',
  companyName: 'alpoTalent',
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

export default function getSingleMockJobCard(): TJobPostCard {
  return { ...MockJobPostCard }
}
