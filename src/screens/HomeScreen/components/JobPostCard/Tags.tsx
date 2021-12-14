import React from 'react'

import styled from 'styled-components/native'
import RoboText from '../../../../common/components/RoboText'
import styles from '../../../../common/styles'

interface Props {
  tags: string[]
}

const TagContainer = styled.View`
  border-width: 0.5px;
  border-color: ${styles.lightGrey};
  border-radius: 10px;
  padding: 5px;
  margin: 3px;
`

const Tag: React.FC<{ tag: string }> = ({ tag }) => (
  <TagContainer>
    <RoboText weight="light" size="small">
      {tag}
    </RoboText>
  </TagContainer>
)

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <Container>
      {tags.map(tag => (
        <Tag tag={tag} />
      ))}
    </Container>
  )
}

export default Tags
