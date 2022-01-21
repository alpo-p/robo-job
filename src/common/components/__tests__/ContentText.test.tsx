import React from 'react'
import renderer from 'react-test-renderer'
import ContentText from '../ContentText'

describe('CompanyLogo', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<ContentText>Testi</ContentText>)
    expect(tree).toMatchSnapshot()
  })
})
