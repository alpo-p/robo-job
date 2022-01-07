import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

interface P {
  children: React.ReactNode
}
export default ({ children }: P) => (
  <LinearGradient
    style={{
      width: '100%',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      paddingBottom: 6,
      zIndex: 1,
    }}
    colors={[
      'transparent',
      'rgba(0,0,0,0.35)',
      'rgba(0,0,0,0.4)',
      'rgba(0,0,0,0.5)',
      'rgba(0,0,0,0.7)',
      'rgba(0,0,0,0.9)',
    ]}
  >
    {children}
  </LinearGradient>
)
