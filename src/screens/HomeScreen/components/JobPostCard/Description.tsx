import React from 'react'

import styled from 'styled-components/native'
import RoboText from '../../../../common/components/RoboText'

interface Props {
  description: string
}

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4px;
`

const Description: React.FC<Props> = ({ description }) => {
  return (
    <Container>
      <RoboText weight="light" size="small">
        {description}
      </RoboText>
    </Container>
  )
}

export default Description
