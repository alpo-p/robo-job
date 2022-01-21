import React from 'react'
import renderer from 'react-test-renderer'
import Tags from '../Tags'

describe('Tags', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Tags tags={['test1', 'test2']} />)
    expect(tree).toMatchSnapshot()
  })
})
