import { Ionicons } from '@expo/vector-icons'

export type IoniconsIconNames = keyof typeof Ionicons.glyphMap

export interface IJobPostCard {
  id: string
  companyName: string
  jobTitle: string
  logoUrl: string
  pictureUrl: string
  location: string
  tags: string[]
  shortDescription: string
  longDescription: string
  deadline: string
  aboutTheCompany: string
  linkToWebsite: string
}
