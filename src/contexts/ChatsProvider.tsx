import React, { useState } from 'react'
import { Chats } from '../common/types'

interface IChatsContext {
  chats: Chats
  setChats: React.Dispatch<React.SetStateAction<Chats>>
}

const defaultState = {
  chats: [] as Chats,
  setChats: undefined as unknown as React.Dispatch<React.SetStateAction<Chats>>,
}

export const ChatsContext = React.createContext<IChatsContext>(defaultState)

const ChatsProvider: React.FC = ({ children }) => {
  const [chats, setChats] = useState<Chats>([])

  return (
    <ChatsContext.Provider
      // TODO: Figure out if needed to wrap in useMemo
      // https://stackoverflow.com/questions/62230532/is-usememo-required-to-manage-state-via-the-context-api-in-reactjs
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        chats,
        setChats,
      }}
    >
      {children}
    </ChatsContext.Provider>
  )
}

export default ChatsProvider
