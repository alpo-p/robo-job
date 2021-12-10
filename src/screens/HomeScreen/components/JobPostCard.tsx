import React from 'react'

import styled from 'styled-components/native'
import { TJobPostCard } from '../../../common/types'

interface Props {
  jobPost: TJobPostCard
}

const Container = styled.SafeAreaView`
  border-width: 1px;
  flex: 1;
  min-height: 100%;
`

const JobTitle = styled.Text`
  text-align: center;
`

const JobPostCard: React.FC<Props> = ({ jobPost }) => {
  return (
    <Container>
      <JobTitle>{jobPost.jobTitle}</JobTitle>
    </Container>
  )
}

export default JobPostCard
