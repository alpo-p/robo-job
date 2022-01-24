import React from 'react'
import create from '../../../testUtils/rendererCreateWithNavigation'
import SearchScreen from '../index'

describe('SearchScreen', () => {
  it('should match snapshot', () => {
    const tree = create(<SearchScreen />)
    expect(tree).toMatchSnapshot()
  })
})
