import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const useGetScreenHeight = (): number => {
  const dimensionsHeight = Dimensions.get('window').height
  const bottomTabHeight = useBottomTabBarHeight()
  const statusBarHeight = getStatusBarHeight()
  return dimensionsHeight - bottomTabHeight - statusBarHeight
}
