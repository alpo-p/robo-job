import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IJobPostCard } from '../../../../../common/types'
import Description from './Description'
import Tags from './Tags'
import Location from './Location'
import ButtonsContainer from './ButtonsContainer'

const BottomPart = ({ jobPost }: { jobPost: IJobPostCard }) => (
  <View style={stylesheet.container}>
    <Location location={jobPost.location} />
    <Tags tags={jobPost.tags} />
    <Description description={jobPost.shortDescription} />
    <ButtonsContainer id={jobPost.id} />
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
