import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'

import styled from 'styled-components/native'

import sharedStyles from './src/sharedStyles'

const Container = styled.View`
  flex: 1;
  background-color: ${sharedStyles.backgroundColor};
  align-items: center;
  align-content: center;
`

const App: React.FC = () => {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  )
}

export default App
