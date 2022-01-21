import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChatsContainer from './components/ChatRowsContainer'
import InputBarWithIcon from '../../common/components/InputBarWithIcon'
import FilterTopBar from './components/FilterTopBar'

export type StateFilter = 'all' | 'unread' | 'unfinished'

export default () => {
  const [searchFilter, setSearchFilter] = useState('')
  const [stateFilter, setStateFilter] = useState<StateFilter>('all')

  return (
    <SafeAreaView>
      <InputBarWithIcon
        value={searchFilter}
        setValue={setSearchFilter}
        iconName="search"
      />
      <FilterTopBar filter={stateFilter} setStateFilter={setStateFilter} />
      <ChatsContainer searchFilter={searchFilter} stateFilter={stateFilter} />
    </SafeAreaView>
  )
}
