import React from 'react'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import Tags from '../Tags'

describe('Tags', () => {
  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(
      <Tags tags={['test1', 'test2']} />,
    )
    expect(tree).toMatchSnapshot()
  })
})
