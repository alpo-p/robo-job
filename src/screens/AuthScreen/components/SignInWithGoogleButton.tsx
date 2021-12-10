import React from 'react'
import styled from 'styled-components/native'
import sharedStyles from '../../../sharedStyles'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const icon = require('../../../../assets/icons8-google-48.png')

interface Props {
  onPress: () => void
}

export const SignInWithGoogleButton: React.FC<Props> = ({ onPress }) => (
  <ButtonContainer onPress={onPress}>
    <IconImage source={icon} />
    <ButtonText>Continue with Google</ButtonText>
  </ButtonContainer>
)

const IconImage = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  width: 80%;
  height: 40px;
  padding: 12px;
  align-items: center;
  border-width: 1px;
  border-radius: 16px;
  border-color: ${sharedStyles.darkGrey};
`
const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  font-family: GillSans;
  color: ${sharedStyles.darkGrey};
`
