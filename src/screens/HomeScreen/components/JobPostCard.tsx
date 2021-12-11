import React from 'react'

import styled from 'styled-components/native'
import RoboText from '../../../common/components/RoboText'
import { JobPostCardType } from '../../../common/types'

interface Props {
  jobPost: JobPostCardType
  height: number
}

const Wrapper = styled.View<{ height: number }>`
  flex: 1;
  flex-direction: column;
  height: ${props => `${props.height}px`};
`

const TopContainer = styled.View`
  align-items: center;
`

const Logo = styled.Image`
  height: 75px;
  width: 75px;
`

const JobPostCard: React.FC<Props> = ({ jobPost, height }) => {
  return (
    <Wrapper height={height}>
      <TopContainer>
        <Logo source={{ uri: jobPost.logoUrl }} />
        <RoboText>{jobPost.companyName}</RoboText>
        <RoboText weight="light">{jobPost.jobTitle}</RoboText>
      </TopContainer>
    </Wrapper>
  )
}

export default JobPostCard
