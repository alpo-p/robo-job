import React from 'react'
import { StyleSheet, View } from 'react-native'

import { IJobPostCard } from '../../../common/types'
import BottomPart from './BottomPart'
import TopPart from './TopPart'

export interface JobPostCardProps {
  jobPost: IJobPostCard
  height: number
}

const JobPostCard: React.FC<JobPostCardProps> = ({ jobPost, height }) => (
  <View style={stylesheet({ height }).wrapper}>
    <TopPart jobPost={jobPost} />
    <BottomPart jobPost={jobPost} />
  </View>
)

const stylesheet = ({ height }: { height?: number }) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      flexDirection: 'column',
      height,
    },
  })

export default JobPostCard
