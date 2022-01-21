import React from 'react'
import renderWithNavigation from '../../../testUtils/renderWithNavigation'
import AuthScreen from '../index'

describe('AuthScreen', () => {
  it('should match snapshot', () => {
    const tree = renderWithNavigation(<AuthScreen />)
    expect(tree).toMatchSnapshot()
  })
})
