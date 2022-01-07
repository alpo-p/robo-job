import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IJobPostCard } from '../../../../../common/types'
import ShortDescription from '../../../../../common/components/ShortDescription'
import Tags from './Tags'
import Location from '../../../../../common/components/Location'
import ButtonsContainer from './ButtonsContainer'
import { VerticalSpaceOf16 } from '../../../../../common/components/VerticalSpaceOf16'
import { VerticalSpaceOf8 } from '../../../../../common/components/VerticalSpaceOf8'

const BottomPart = ({ jobPost }: { jobPost: IJobPostCard }) => (
  <View style={stylesheet.container}>
    <VerticalSpaceOf8 />
    <Location location={jobPost.location} />
    <VerticalSpaceOf8 />
    <Tags tags={jobPost.tags} />
    <VerticalSpaceOf16 />
    <ShortDescription description={jobPost.shortDescription} />
    <ButtonsContainer jobPost={jobPost} />
  </View>
)

export default BottomPart

const stylesheet = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
})
