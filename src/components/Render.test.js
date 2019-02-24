import React from 'react'
import { mount } from 'enzyme'
import Render from './Render'
import Table from './Table'
import consolidate from './consolidate'

const fake = {
  repo: {
    currency: 'USD',
    data: [
      [
        {
          id: 1,
          name: "Hewlett-Packard Rideable Lawnmower",
          price: "2280.00",
          type: "Lawnmowers"
        }
      ]
    ]
  }
}

describe('components/Render', function () {
  it('should wait for loading while fetching data', async function () {
    const wrapper = mount(<Render />)
    expect(wrapper.contains(<h2>Loading, please wait ...</h2>)).toBe(true)
  })

  it('should mount Table when data fetched', async function () {
    const wrapper = mount(<Render />)
    expect(wrapper.contains(<h2>Loading, please wait ...</h2>)).toBe(false)
  })
})

