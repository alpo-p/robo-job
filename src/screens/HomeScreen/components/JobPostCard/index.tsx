import React from 'react'

import styled from 'styled-components/native'
import RoboText from '../../../../common/components/RoboText'
import styles from '../../../../common/styles'
import { IJobPostCard } from '../../../../common/types'
import ButtonContainer from './ButtonContainer'
import Description from './Description'
import Tags from './Tags'

interface Props {
  jobPost: IJobPostCard
  height: number
}

const Wrapper = styled.View<{ height: number }>`
  flex: 1;
  flex-direction: column;
  height: ${props => `${props.height}px`};
  border-top-width: 0.2px;
  border-bottom-width: 0.2px;
  border-color: ${styles.lightGrey};
`

const TopContainer = styled.View`
  align-items: center;
  margin-top: 4px;
  margin-bottom: 4px;
`

const Logo = styled.Image`
  height: 75px;
  width: 75px;
`

const MiddleContainer = styled.View`
  border-top-color: ${styles.lightGrey};
  border-top-width: 1px;
  padding-top: 4px;
`

const JobPostCard: React.FC<Props> = ({ jobPost, height }) => {
  return (
    <Wrapper height={height}>
      <TopContainer>
        <Logo source={{ uri: jobPost.logoUrl }} />
        <RoboText>{jobPost.companyName}</RoboText>
        <RoboText weight="light">{jobPost.jobTitle}</RoboText>
      </TopContainer>
      <MiddleContainer>
        <Tags tags={jobPost.tags} />
        <Description description={jobPost.shortDescription} />
      </MiddleContainer>
      <ButtonContainer />
    </Wrapper>
  )
}

export default JobPostCard
