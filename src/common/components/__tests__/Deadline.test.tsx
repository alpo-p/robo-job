import React from 'react'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import { Deadline } from '../Deadline'

describe('CompanyLogo', () => {
  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(<Deadline dl="1" />)
    expect(tree).toMatchSnapshot()
  })
})
