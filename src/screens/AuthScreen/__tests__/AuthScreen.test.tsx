import React from 'react'
import create from '../../../testUtils/rendererCreateWithNavigation'
import AuthScreen from '../index'

describe('AuthScreen', () => {
  it('should match snapshot', () => {
    const tree = create(<AuthScreen />)
    expect(tree).toMatchSnapshot()
  })
})
