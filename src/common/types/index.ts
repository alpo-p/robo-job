export interface IJobPostCard {
  id: string
  companyName: string
  jobTitle: string
  logoUrl: string
  pictureUrl: string
  location: string
  tags: TagType[]
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
  typeOfMessage: MessageTypes
  text: string
}

export interface IndividualChat {
  jobPostId: string
  messages: Message[]
}

export type Chats = IndividualChat[]

export interface LikedJob {
  id: string
  isUnread?: boolean
}

export interface TagType {
  id: string
  text: string
}
