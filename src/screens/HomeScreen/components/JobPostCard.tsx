import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Dimensions, StatusBar } from 'react-native'

import styled from 'styled-components/native'
import { JobPostCardType } from '../../../common/types'

interface Props {
  jobPost: JobPostCardType
}

interface P {
  height: number
}

const Container = styled.View<P>`
  border-width: 1px;
  flex: 1;
  height: ${props => props.height};
`

const JobTitle = styled.Text`
  text-align: center;
`

const JobPostCard: React.FC<Props> = ({ jobPost }) => {
  const dimensionsHeight = Dimensions.get('window').height
  const bottomTabHeight = useBottomTabBarHeight()
  const statusBarHeight = StatusBar.currentHeight ?? 20
  const height = dimensionsHeight - bottomTabHeight - statusBarHeight
  return (
    <Container height={height}>
      <JobTitle>{jobPost.jobTitle}</JobTitle>
    </Container>
  )
}

export default JobPostCard
