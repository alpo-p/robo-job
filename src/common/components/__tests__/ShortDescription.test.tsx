import React from 'react'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import ShortDescription from '../ShortDescription'

describe('ShortDescription', () => {
  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(
      <ShortDescription description="testi" />,
    )
    expect(tree).toMatchSnapshot()
  })
})
