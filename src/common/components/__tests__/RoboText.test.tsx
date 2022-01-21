import React from 'react'
import renderer from 'react-test-renderer'
import RoboText from '../RoboText'

describe('RoboText', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<RoboText>Testi</RoboText>)
    expect(tree).toMatchSnapshot()
  })
})
