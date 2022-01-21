import React from 'react'
import renderer from 'react-test-renderer'
import ShortDescription from '../ShortDescription'

describe('ShortDescription', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<ShortDescription description="testi" />)
    expect(tree).toMatchSnapshot()
  })
})
