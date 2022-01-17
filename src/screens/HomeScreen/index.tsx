/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react'
import { View, Animated } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import { useGetScreenHeightWithoutStatusBar } from '../../hooks/useGetScreenHeight'
import getMockJobCards from '../../__mocks__/getMockJobCards'
import JobPostCardsScreen from './JobPostCardsScreen'

const HomeScreen: React.FC = () => {
  const height = useGetScreenHeightWithoutStatusBar()
  const cards = getMockJobCards()

  const { colors } = useTheme()

  const [value] = useState(new Animated.Value(200))
  const [display, setDisplay] = useState<undefined | 'none'>(undefined)

  const animateSwipe = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(value, {
          toValue: 200,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.timing(value, {
          toValue: 0,
          duration: 200,
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
    <View>
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
      <JobPostCardsScreen height={height} cards={cards} />
    </View>
  )
}

export default HomeScreen
