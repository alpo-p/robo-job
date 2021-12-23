import React from 'react'
import RoboText from './RoboText'

const ContentText: React.FC = ({ children }) => (
  <RoboText
    weight="light"
    size="small"
    style={{
      lineHeight: 24,
      textAlign: 'justify',
    }}
  >
    {children}
  </RoboText>
)

export default ContentText
