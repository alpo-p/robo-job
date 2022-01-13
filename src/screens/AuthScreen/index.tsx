/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native'

import SignInPage from './components/SignInPage'
import { OnboardingPage, OnboaringPageProps } from './components/OnboardingPage'
import { PaginationDots } from './components/PaginationDots'

type OnboardingPageT = Omit<OnboaringPageProps, 'width'>

const first: OnboardingPageT = {
  title: 'Search for jobs',
  text: `...and then swipe through them`,
  iconName: 'search',
}

const second: OnboardingPageT = {
  title: 'Save the jobs you like',
  text: 'Your profile will not be shared when liking',
  iconName: 'heart',
}

const third: OnboardingPageT = {
  title: 'Quick apply',
  text: 'Apply to jobs by answering a couple of questions by the company',
  iconName: 'chatbox',
}

type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>

const NUMBER_OF_PAGES = 5

const AuthScreen: React.FC = () => {
  const { width } = Dimensions.get('screen')
  const [page, setPage] = useState(0)

  const setSliderPage = (event: ScrollEvent) => {
    const { x } = event.nativeEvent.contentOffset
    const indexOfNextScreen = Math.floor(x / width)
    if (indexOfNextScreen !== page) {
      setPage(indexOfNextScreen)
    }
  }

  return (
    <>
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event: ScrollEvent) => {
          setSliderPage(event)
        }}
      >
        <SignInPage width={width} hideSignInButton />
        <OnboardingPage width={width} {...first} />
        <OnboardingPage width={width} {...second} />
        <OnboardingPage width={width} {...third} />
        <SignInPage width={width} />
      </ScrollView>
      <PaginationDots page={page} numbOfPages={NUMBER_OF_PAGES} />
    </>
  )
}

export default AuthScreen
