import React, { useState } from 'react'

type TSetGlobalBooleans = React.Dispatch<React.SetStateAction<GlobalBooleans>>

interface GlobalBooleans {
  showProfileBadge: boolean
}

interface IGlobalBooleansContext {
  globalBooleans: GlobalBooleans
  setGlobalBooleans: TSetGlobalBooleans
}

const defaultState = {
  globalBooleans: {
    showProfileBadge: false,
  },
  setGlobalBooleans: undefined as unknown as TSetGlobalBooleans,
}

export const GlobalBooleansContext =
  React.createContext<IGlobalBooleansContext>(defaultState)

const ChatsProvider: React.FC = ({ children }) => {
  const [badges, setBadges] = useState<GlobalBooleans>(
    defaultState.globalBooleans,
  )

  return (
    <GlobalBooleansContext.Provider
      // TODO: Figure out if needed to wrap in useMemo
      // https://stackoverflow.com/questions/62230532/is-usememo-required-to-manage-state-via-the-context-api-in-reactjs
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        globalBooleans: badges,
        setGlobalBooleans: setBadges,
      }}
    >
      {children}
    </GlobalBooleansContext.Provider>
  )
}

export default ChatsProvider
