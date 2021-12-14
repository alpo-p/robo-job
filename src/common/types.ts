import { Ionicons } from '@expo/vector-icons'

export type IoniconsIconNames = keyof typeof Ionicons.glyphMap

export interface IJobPostCard {
  id: string
  companyName: string
  jobTitle: string
  logoUrl: string
  tags: string[]
  shortDescription: string
}
