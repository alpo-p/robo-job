import { useContext } from 'react'
import { LikedJob } from '../common/types'
import {
  LikedJobsContext,
  SetLikedJobsType,
} from '../contexts/LikedJobsProvider'

// TODO: refactor this whole thing
// TODO: extract this out of here and get rid of the weird dependency of setLikedJobs
export const likeOrDislikeJob = (
  id: string,
  setLikedJobs: SetLikedJobsType,
) => {
  setLikedJobs((jobs: LikedJob[]) => {
    if (jobs.map(job => job.id).includes(id)) {
      return jobs.filter(likedJobId => likedJobId.id !== id)
    }
    return jobs.concat({ id })
  })
}

export default () => {
  return useContext(LikedJobsContext)
}
