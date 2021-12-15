import React from 'react'
import { ImageBackground } from 'react-native'

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
  width: number
}

const Wrapper = styled.View<{ height: number }>`
  flex: 1;
  flex-direction: column;
  height: ${props => `${props.height}px`};
  background-color: black;
`

const TopContainer = styled.View`
  margin-top: 4px;
  margin-bottom: 4px;
  height: 200px;
`

const Logo = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-top: 30px;
`

const TopTextContainer = styled.View`
  background-color: ${styles.lightGreyOpacity};
  align-items: center;
`

const BottomContainer = styled.View`
  border-top-color: ${styles.lightGrey};
  border-top-width: 1px;
  padding-top: 4px;
`

const JobPostCard: React.FC<Props> = ({ jobPost, height, width }) => {
  return (
    <Wrapper height={height}>
      <TopContainer>
        <ImageBackground
          source={{ uri: jobPost.pictureUrl }}
          resizeMode="cover"
          style={{ height: 200, width, alignItems: 'center' }}
        >
          <Logo source={{ uri: jobPost.logoUrl }} />
          <TopTextContainer>
            <RoboText color="primaryDark">{jobPost.companyName}</RoboText>
            <RoboText color="primaryDark" weight="light">
              {jobPost.jobTitle}
            </RoboText>
          </TopTextContainer>
        </ImageBackground>
      </TopContainer>
      <BottomContainer>
        <Tags tags={jobPost.tags} />
        <Description description={jobPost.shortDescription} />
      </BottomContainer>
      <ButtonContainer />
    </Wrapper>
  )
}

export default JobPostCard
