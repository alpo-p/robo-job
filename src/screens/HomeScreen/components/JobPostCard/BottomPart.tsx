import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IJobPostCard } from '../../../../common/types'
import Description from './Description'
import Tags from './Tags'

const BottomPart = ({ jobPost }: { jobPost: IJobPostCard }) => (
  <View style={stylesheet.container}>
    <Tags tags={jobPost.tags} />
    <Description description={jobPost.shortDescription} />
  </View>
)

export default BottomPart

const stylesheet = StyleSheet.create({
  container: {
    padding: 8,
  },
})
