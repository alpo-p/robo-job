import React from 'react'
import { ImageBackground } from 'react-native'

interface P {
  pictureUrl: string
  children: React.ReactNode
}

export default ({ pictureUrl, children }: P) => (
  <ImageBackground
    source={{ uri: pictureUrl }}
    resizeMode="stretch"
    style={{
      height: 280,
    }}
  >
    {children}
  </ImageBackground>
)
