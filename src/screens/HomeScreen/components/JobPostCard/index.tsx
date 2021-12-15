import React from 'react'
import { StyleSheet, View } from 'react-native'

import { IJobPostCard } from '../../../../common/types'
import BottomPart from './BottomPart'
import TopPart from './TopPart'

export interface JobPostCardProps {
  jobPost: IJobPostCard
  height: number
  width: number
}

const JobPostCard: React.FC<JobPostCardProps> = ({
  jobPost,
  height,
  width,
}) => (
  <View style={stylesheet({ height }).wrapper}>
    <TopPart jobPost={jobPost} width={width} />
    <BottomPart jobPost={jobPost} />
  </View>
)

const stylesheet = ({ height }: { height?: number }) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      flexDirection: 'column',
      height,
      backgroundColor: 'black',
    },
  })

export default JobPostCard
