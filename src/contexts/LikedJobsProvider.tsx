import React, { useState } from 'react'

interface ILikedJobsContext {
  likedJobs: string[]
  setLikedJobs: React.Dispatch<React.SetStateAction<string[]>>
}

const defaultState = {
  likedJobs: [] as string[],
  setLikedJobs: undefined as unknown as React.Dispatch<
    React.SetStateAction<string[]>
  >,
}

export const LikedJobsContext =
  React.createContext<ILikedJobsContext>(defaultState)

const LikedJobsProvider: React.FC = ({ children }) => {
  const [likedJobs, setLikedJobs] = useState<string[]>([])

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
