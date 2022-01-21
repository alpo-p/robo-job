import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { IJobPostCard } from '../../../common/types'
import create from '../../../testUtils/rendererCreateWithNavigation'
import getMockJobCards from '../../../__mocks__/getMockJobCards'
import ChatScreen from '../index'

describe('ChatScreen', () => {
  const prop = {
    params: { jobPost: getMockJobCards()[0] },
  } as unknown as RouteProp<{ params: { jobPost: IJobPostCard } }, 'params'>

  it('should match snapshot', () => {
    const tree = create(<ChatScreen route={prop} />)
    expect(tree).toMatchSnapshot()
  })
})
