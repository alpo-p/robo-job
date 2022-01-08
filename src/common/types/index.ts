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

export type MessageTypes = 'robo' | 'recruiter' | 'user'

export interface Message {
  typeOfMessage: MessageTypes
  text: string
}

export interface IndividualChat {
  jobPostId: string
  messages: Message[]
}

export type Chats = IndividualChat[]
