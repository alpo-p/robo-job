import React from 'react'
import create from '../../../testUtils/rendererCreateWithNavigation'
import ChatRowsScreen from '../index'

describe('ChatRowsScreen', () => {
  it('should match snapshot', () => {
    const tree = create(<ChatRowsScreen />)
    expect(tree).toMatchSnapshot()
  })
})
