import { useContext } from 'react'
import { ChatsContext } from '../contexts/ChatsProvider'

export default () => {
  return useContext(ChatsContext)
}
