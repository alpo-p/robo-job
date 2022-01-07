import { useContext } from 'react'
import { SetStringStateType } from '../common/types'
import { LikedJobsContext } from '../contexts/LikedJobsProvider'

export const likeOrDislikeJob = (
  id: string,
  setLikedJobs: SetStringStateType,
) => {
  setLikedJobs((jobs: string[]) => {
    if (jobs.includes(id)) {
      return jobs.filter(likedJobId => likedJobId !== id)
    }
    return jobs.concat(id)
  })
}

export default () => {
  return useContext(LikedJobsContext)
}
