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
  recruiterName: string
}

// The message can be from "the robot" (pre-assigned questions), recruiter (manual messages) or the user
// note: how to group the question and user answer together? A type with "question: string, answer: string" would solve this I guess
export type MessageTypes = 'robo' | 'recruiter' | 'user'

export interface Message {
  id: string
  typeOfMessage: MessageTypes
  text: string
  seen?: boolean
}

export interface IndividualChat {
  jobPostId: string
  messages: Message[]
}

export type Chats = IndividualChat[]
