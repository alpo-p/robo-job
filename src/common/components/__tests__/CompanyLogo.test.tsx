import React from 'react'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import CompanyLogo from '../CompanyLogo'

describe('CompanyLogo', () => {
  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(<CompanyLogo url="testUrl" />)
    expect(tree).toMatchSnapshot()
  })
})
