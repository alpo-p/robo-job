import React from 'react'
import { Image } from 'react-native'

type LogoSizes = 'tiny' | 'small' | 'default'

interface P {
  url: string
  size?: LogoSizes
}

const sizes = {
  tiny: 20,
  small: 50,
  default: 56,
}

export default ({ url, size = 'default' }: P) => (
  <Image
    style={{
      height: sizes[size],
      width: sizes[size],
      borderRadius: sizes[size] / 2,
    }}
    source={{ uri: url }}
  />
)
