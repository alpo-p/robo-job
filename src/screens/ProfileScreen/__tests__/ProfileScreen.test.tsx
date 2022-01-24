import React from 'react'
import create from '../../../testUtils/rendererCreateWithNavigation'
import ProfileScreen from '../index'

describe('ProfileScreen', () => {
  it('should match snapshot', () => {
    const tree = create(<ProfileScreen />)
    expect(tree).toMatchSnapshot()
  })
})
