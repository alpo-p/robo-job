import React, { useState } from 'react'
import { LikedJob } from '../common/types'

export type SetLikedJobsType = React.Dispatch<React.SetStateAction<LikedJob[]>>

interface ILikedJobsContext {
  likedJobs: LikedJob[]
  setLikedJobs: SetLikedJobsType
}

const defaultState = {
  likedJobs: [] as LikedJob[],
  setLikedJobs: undefined as unknown as SetLikedJobsType,
}

export const LikedJobsContext =
  React.createContext<ILikedJobsContext>(defaultState)

const LikedJobsProvider: React.FC = ({ children }) => {
  const [likedJobs, setLikedJobs] = useState<LikedJob[]>([])

  return (
    <LikedJobsContext.Provider
      // TODO: Figure out if needed to wrap in useMemo
      // https://stackoverflow.com/questions/62230532/is-usememo-required-to-manage-state-via-the-context-api-in-reactjs
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        likedJobs,
        setLikedJobs,
      }}
    >
      {children}
    </LikedJobsContext.Provider>
  )
}

export default LikedJobsProvider
