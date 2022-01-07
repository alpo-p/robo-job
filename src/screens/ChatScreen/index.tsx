import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChatsContainer from './components/ChatsContainer'
import ChatSearchBar from './components/ChatSearchBar'
import FilterTopBar from './components/FilterTopBar'

export type StateFilter = 'all' | 'unread' | 'unfinished'

export default () => {
  const [searchFilter, setSearchFilter] = useState('')
  const [stateFilter, setStateFilter] = useState<StateFilter>('all')

  return (
    <SafeAreaView>
      <ChatSearchBar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <FilterTopBar filter={stateFilter} setStateFilter={setStateFilter} />
      <ChatsContainer searchFilter={searchFilter} stateFilter={stateFilter} />
    </SafeAreaView>
  )
}
