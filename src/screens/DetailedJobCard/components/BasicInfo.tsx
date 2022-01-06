import React from 'react'
import { View } from 'react-native'
import CompanyNameAndTitle from '../../../common/components/CompanyNameAndTitle'
import { IJobPostCard } from '../../../common/types'
import Location from '../../../common/components/Location'
import { Deadline } from './Deadline'
import ShortDescription from '../../../common/components/ShortDescription'

interface P {
  jobPost: IJobPostCard
}

export default ({ jobPost }: P) => (
  <View
    style={{
      marginTop: 16,
      marginBottom: 24,
    }}
  >
    <CompanyNameAndTitle
      companyName={jobPost.companyName}
      jobTitle={jobPost.jobTitle}
      editStylesForDetailedView
    />
    <View style={{ marginTop: 8 }} />
    <Location location={jobPost.location} />
    <Deadline dl={jobPost.deadline} />
    <ShortDescription description={jobPost.shortDescription} />
  </View>
)
