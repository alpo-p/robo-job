import React from 'react'
import rendererCreateWithNavigation from '../../../testUtils/rendererCreateWithNavigation'
import RoboText from '../RoboText'

describe('RoboText', () => {
  it('should match snapshot', () => {
    const tree = rendererCreateWithNavigation(<RoboText>Testi</RoboText>)
    expect(tree).toMatchSnapshot()
  })
})
