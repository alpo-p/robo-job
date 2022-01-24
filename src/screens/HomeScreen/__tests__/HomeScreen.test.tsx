import React from 'react'
import create from '../../../testUtils/rendererCreateWithNavigation'
import HomeScreen from '../index'

jest.mock('../../../hooks/useGetScreenHeight.tsx', () => {
  const mock = {
    useGetScreenHeightWithoutStatusBar: () => 400,
  }
  return mock
})

describe('HomeScreen', () => {
  it('should match snapshot', () => {
    const tree = create(<HomeScreen />)
    expect(tree).toMatchSnapshot()
  })
})
