import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import SmallCompanyLogo from '../../ChatRowsScreen/components/SmallCompanyLogo'

const ROBO_COP_URL =
  'https://cdn3.iconfinder.com/data/icons/movies-solid/60/54_-_Robocop_video_film_cinema_movie-1024.png'

export default () => {
  const { colors } = useTheme()
  const SIZE = 32
  return (
    <View
      style={{
        backgroundColor: colors.background,
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SmallCompanyLogo size="tiny" url={ROBO_COP_URL} />
    </View>
  )
}
