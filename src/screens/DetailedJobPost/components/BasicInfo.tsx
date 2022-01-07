import React from 'react'
import { View } from 'react-native'
import CompanyNameAndTitle from '../../../common/components/CompanyNameAndTitle'
import { IJobPostCard } from '../../../common/types'
import Location from '../../../common/components/Location'
import { Deadline } from '../../../common/components/Deadline'
import ShortDescription from '../../../common/components/ShortDescription'
import { VerticalSpaceOf24 } from '../../../common/components/VerticalSpaceOf24'
import { VerticalSpaceOf16 } from '../../../common/components/VerticalSpaceOf16'

interface P {
  jobPost: IJobPostCard
}

export default ({ jobPost }: P) => (
  <View>
    <CompanyNameAndTitle
      companyName={jobPost.companyName}
      jobTitle={jobPost.jobTitle}
      editStylesForDetailedView
    />
    <VerticalSpaceOf16 />
    <Location location={jobPost.location} />
    <VerticalSpaceOf16 />
    <Deadline dl={jobPost.deadline} />
    <VerticalSpaceOf24 />
    <ShortDescription description={jobPost.shortDescription} useWiderStyle />
  </View>
)
