import React from 'react'
import ReceivedMessageBase from './ReceivedMessageBase'
import RoboAvatar from './RoboAvatar'

interface P {
  text: string
}
export default ({ text }: P) => (
  <ReceivedMessageBase avatar={<RoboAvatar />} text={text} name="Robo" />
)
