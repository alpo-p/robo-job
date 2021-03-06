import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

const SPEED = 500
const SIZE = 250

export default () => {
  const { colors } = useTheme()

  const [value] = useState(new Animated.Value(SIZE))
  const [display, setDisplay] = useState<undefined | 'none'>(undefined)

  const animateSwipe = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(value, {
          toValue: SIZE,
          duration: SPEED,
          useNativeDriver: true,
        }),
        Animated.delay(SPEED / 2),
        Animated.timing(value, {
          toValue: 0,
          duration: SPEED / 2,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 3 },
    ).start(event => {
      if (event.finished) {
        setDisplay('none')
      }
    })
  }

  useEffect(() => {
    animateSwipe()
  })
  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: '55%',
        left: '45%',
        zIndex: 2,
        transform: [
          {
            translateY: value,
          },
        ],
        display,
      }}
    >
      <MaterialCommunityIcons
        name="gesture-swipe-up"
        size={50}
        color={colors.primary}
      />
    </Animated.View>
  )
}
