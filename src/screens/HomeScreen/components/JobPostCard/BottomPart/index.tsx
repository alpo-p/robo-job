import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IJobPostCard } from '../../../../../common/types'
import ShortDescription from '../../../../../common/components/ShortDescription'
import Tags from './Tags'
import Location from '../../../../../common/components/Location'
import ButtonsContainer from './ButtonsContainer'

const BottomPart = ({ jobPost }: { jobPost: IJobPostCard }) => (
  <View style={stylesheet.container}>
    <Location location={jobPost.location} />
    <Tags tags={jobPost.tags} />
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
