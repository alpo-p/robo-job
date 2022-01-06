import React from 'react'
import { View } from 'react-native'
import ContentText from '../../../common/components/ContentText'
import RoboText from '../../../common/components/RoboText'
import { IJobPostCard } from '../../../common/types'

interface P {
  jobPost: IJobPostCard
}
export default ({ jobPost }: P) => (
  <View style={{ marginTop: 16 }}>
    <RoboText size="medium">We are {jobPost.companyName} </RoboText>
    <View style={{ marginBottom: 8 }} />
    <ContentText>{jobPost.aboutTheCompany}</ContentText>
  </View>
)
