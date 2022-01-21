import React from 'react'
import renderer from 'react-test-renderer'
import { Deadline } from '../Deadline'

describe('CompanyLogo', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Deadline dl="1" />)
    expect(tree).toMatchSnapshot()
  })
})
