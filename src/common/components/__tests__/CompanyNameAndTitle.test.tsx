import React from 'react'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import CompanyNameAndTitle from '../CompanyNameAndTitle'

describe('CompanyLogo', () => {
  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(
      <CompanyNameAndTitle companyName="test name" jobTitle="test title" />,
    )
    expect(tree).toMatchSnapshot()
  })
})
