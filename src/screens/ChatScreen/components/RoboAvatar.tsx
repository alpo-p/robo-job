import React from 'react'
import { useColorScheme, Image } from 'react-native'

export const ROBO_COP_URL =
  'https://cdn3.iconfinder.com/data/icons/movies-solid/60/54_-_Robocop_video_film_cinema_movie-1024.png'

interface P {
  size: number
}

export default ({ size }: P) => {
  const scheme = useColorScheme()
  const isDark = scheme === 'dark'
  return (
    <Image
      style={{
        height: size,
        width: size,
        tintColor: isDark ? 'white' : undefined,
      }}
      source={{
        uri: ROBO_COP_URL,
      }}
    />
  )
}
