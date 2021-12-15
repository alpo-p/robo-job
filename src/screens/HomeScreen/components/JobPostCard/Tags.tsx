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
  margin: 2px;
`

const Tag: React.FC<{ tag: string }> = ({ tag }) => (
  <TagContainer>
    <RoboText uppercase weight="light" size="tiny">
      {tag}
    </RoboText>
  </TagContainer>
)

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px;
`

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <Container>
      {tags.map((tag, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tag key={i} tag={tag} />
      ))}
    </Container>
  )
}

export default Tags
