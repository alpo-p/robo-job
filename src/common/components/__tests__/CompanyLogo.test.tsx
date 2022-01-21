import React from 'react'
import renderer from 'react-test-renderer'
import CompanyLogo from '../CompanyLogo'

describe('CompanyLogo', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<CompanyLogo url="testUrl" />)
    expect(tree).toMatchSnapshot()
  })
})
