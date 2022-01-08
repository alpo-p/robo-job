import { useContext } from 'react'
import { SetStringStateType } from '../common/types/utilTypes'
import { LikedJobsContext } from '../contexts/LikedJobsProvider'

// TODO: refactor this whole thing
// TODO: extract this out of here and get rid of the weird dependency of setLikedJobs
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
