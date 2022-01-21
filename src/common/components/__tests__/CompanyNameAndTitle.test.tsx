import React from 'react'
import renderer from 'react-test-renderer'
import CompanyNameAndTitle from '../CompanyNameAndTitle'

describe('CompanyLogo', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <CompanyNameAndTitle companyName="test name" jobTitle="test title" />,
    )
    expect(tree).toMatchSnapshot()
  })
})
