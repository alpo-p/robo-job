import { useContext } from 'react'
import { LikedJobsContext } from '../contexts/LikedJobsProvider'

export default () => {
  const { likedJobs, setLikedJobs } = useContext(LikedJobsContext)
  return [likedJobs, setLikedJobs]
}
