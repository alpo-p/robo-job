import { useContext } from 'react'
import { LikedJobsContext } from '../contexts/LikedJobsProvider'

export default () => {
  return useContext(LikedJobsContext)
}
