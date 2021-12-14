import React from 'react'

import styled from 'styled-components/native'
import { RoboButton } from '../../../../common/components/RoboButton'

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4px;
  margin-top: auto;
  flex-direction: row;
  max-height: 150px;
  align-content: space-between;
`

const ButtonContainer: React.FC = () => {
  const handleShowFullInfo = () => console.log('showing full info')
  const handleClickLike = () => console.log('Liking')
  const handleApplyNow = () => console.log('Applying!')

  return (
    <Container>
      <RoboButton onPress={handleShowFullInfo} title="i" />
      <RoboButton onPress={handleClickLike} title="<3" />
      <RoboButton onPress={handleApplyNow} title="APPLY" />
    </Container>
  )
}

export default ButtonContainer
