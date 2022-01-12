import React from 'react'
import ReceivedMessageBase from './ReceivedMessageBase'
import RoboAvatar from './RoboAvatar'

interface P {
  text: string
}
export default ({ text }: P) => (
  <ReceivedMessageBase
    avatar={<RoboAvatar size={32} />}
    text={text}
    name="Robo"
  />
)
