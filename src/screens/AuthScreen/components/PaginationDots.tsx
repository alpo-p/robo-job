import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

export const PaginationDots: React.FC<{
  page: number
  numbOfPages: number
}> = ({ page, numbOfPages }) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      {Array.from(Array(numbOfPages).keys()).map((key, index) => (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 10 / 2,
            backgroundColor: colors.primary,
            marginLeft: 10,
            opacity: page === index ? 1 : 0.2,
          }}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        />
      ))}
    </View>
  )
}
