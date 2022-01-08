import React from 'react'
import { IJobPostCard } from '../../../common/types'
import SmallCompanyLogo from '../../ChatRowsScreen/components/SmallCompanyLogo'
import ReceivedMessageBase from './ReceivedMessageBase'

interface P {
  text: string
  jobPost: IJobPostCard
}

export default ({ text, jobPost }: P) => (
  <ReceivedMessageBase
    avatar={<SmallCompanyLogo size="tiny" url={jobPost.logoUrl} />}
    text={text}
    name={jobPost.recruiterName}
  />
)
