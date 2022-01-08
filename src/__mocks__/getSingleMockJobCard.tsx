import { IJobPostCard } from '../common/types'
import getLoremIpsum from './getLoremIpsum'

const lorem400c = getLoremIpsum(400)
const lorem2000c = getLoremIpsum(2000)

const MockJobPostCard: IJobPostCard = {
  id: '123',
  companyName: 'The Incredible Company',
  jobTitle: 'Software developer',
  logoUrl: 'https://picsum.photos/112',
  pictureUrl: 'https://picsum.photos/280',
  location: 'Helsinki',
  tags: [
    'javascript',
    'software development',
    'react',
    'react native',
    'node.js',
  ],
  shortDescription: lorem400c,
  longDescription: lorem2000c,
  deadline: '4.20.22',
  aboutTheCompany: lorem400c,
  linkToWebsite: 'www.goatze.com',
}

export default function getSingleMockJobCard(): IJobPostCard {
  return { ...MockJobPostCard }
}
