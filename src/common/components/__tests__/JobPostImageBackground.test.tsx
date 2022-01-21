import React from 'react'
import renderer from 'react-test-renderer'
import { Text } from 'react-native'
import JobPostImageBackground from '../JobPostImageBackground'

describe('JobPostImageBackground', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <JobPostImageBackground pictureUrl="testUrl">
        <Text>Test</Text>
      </JobPostImageBackground>,
    )
    expect(tree).toMatchSnapshot()
  })
})
