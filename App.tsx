import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigator from './src/navigators/Navigator'

import LikedJobsProvider from './src/contexts/LikedJobsProvider'
import ChatsProvider from './src/contexts/ChatsProvider'
import GlobalBooleansProvider from './src/contexts/GlobalBooleansProvider'

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <SafeAreaProvider>
        <GlobalBooleansProvider>
          <ChatsProvider>
            <LikedJobsProvider>
              <Navigator />
            </LikedJobsProvider>
          </ChatsProvider>
        </GlobalBooleansProvider>
      </SafeAreaProvider>
    </>
  )
}

export default App
