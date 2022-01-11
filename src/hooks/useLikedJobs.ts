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

export const useSetAsReadOrUnread = (id: string) => {
  const { setLikedJobs } = useContext(LikedJobsContext)
  const setAsUnread = () =>
    setLikedJobs((jobs: LikedJob[]) => {
      const newLikedJobObject = {
        id,
        isUnread: true,
      }
      return jobs.map(job => (job.id === id ? newLikedJobObject : job))
    })
  const setAsRead = () =>
    setLikedJobs((jobs: LikedJob[]) => {
      const newLikedJobObject = {
        id,
        isUnread: false,
      }
      return jobs.map(job => (job.id === id ? newLikedJobObject : job))
    })
  return { setAsRead, setAsUnread }
}

export default () => {
  return useContext(LikedJobsContext)
}
