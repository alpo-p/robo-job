import React from 'react'
import styled from 'styled-components/native'
import sharedStyles from '../sharedStyles'

// TODO: make width 100% and then use containers in the actual app
const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  border-width: 0.5px;
  width: 150px;
  border-radius: 16px;
  border-color: ${sharedStyles.darkGrey};
`

const ButtonContent = styled.Text`
  font-family: GillSans-Light;
  font-size: 14px;
  color: ${sharedStyles.darkGrey};
`

interface Props {
  onPress: () => void
  title?: string
}

export const RoboButton: React.FC<Props> = ({ onPress, children, title }) => (
  <ButtonContainer onPress={onPress}>
    {title ? <ButtonContent>{title}</ButtonContent> : children}
  </ButtonContainer>
)
