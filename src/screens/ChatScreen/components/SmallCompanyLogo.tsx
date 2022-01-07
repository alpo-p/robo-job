import React from 'react'
import { Image } from 'react-native'

interface P {
  url: string
}
export default ({ url }: P) => (
  <Image
    style={{
      height: 48,
      width: 48,
      borderRadius: 24,
    }}
    source={{ uri: url }}
  />
)
