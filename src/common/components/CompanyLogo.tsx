import React from 'react'
import { Image } from 'react-native'

interface P {
  url: string
  enableStylingForDetailedView?: boolean
}

export default ({ url, enableStylingForDetailedView }: P) => (
  <Image
    style={{
      height: 112,
      width: 112,
      borderRadius: 56,
      borderWidth: enableStylingForDetailedView ? 4 : 1,
      borderColor: 'white',
      alignSelf: 'center',
      position: 'absolute',
      bottom: enableStylingForDetailedView ? -12 : 70,
    }}
    source={{ uri: url }}
  />
)
