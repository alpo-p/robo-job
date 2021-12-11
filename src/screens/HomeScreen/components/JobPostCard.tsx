import React from 'react'

import styled from 'styled-components/native'
import { JobPostCardType } from '../../../common/types'

interface Props {
  jobPost: JobPostCardType
  height: number
}

const Wrapper = styled.View<{ height: number }>`
  border-width: 1px;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: ${props => props.height};
`

const Logo = styled.Image`
  height: 50px;
  width: 50px;
`

const JobTitle = styled.Text`
  text-align: center;
`

const JobPostCard: React.FC<Props> = ({ jobPost, height }) => {
  return (
    <Wrapper height={height}>
      <Logo source={{ uri: jobPost.logoUrl }} />
      <JobTitle>{jobPost.jobTitle}</JobTitle>
    </Wrapper>
  )
}

export default JobPostCard
