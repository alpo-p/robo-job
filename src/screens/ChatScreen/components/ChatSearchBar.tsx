import React from 'react'
import { TextInput } from 'react-native'

interface P {
  searchFilter: string
  // eslint-disable-next-line no-unused-vars
  setSearchFilter: (term: string) => void
}

export default ({ searchFilter, setSearchFilter }: P) => (
  <TextInput
    style={{
      borderWidth: 1,
    }}
    value={searchFilter}
    onChangeText={setSearchFilter}
    placeholder="Search"
  />
)
