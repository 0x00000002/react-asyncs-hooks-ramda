import React from 'react'
import Table from './Table'
import { mount } from 'enzyme'

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

describe('components/Table', function () {
  const wrapper = mount(<Table currency={fake.repo.currency} data={fake.repo.data} />)

  it('should contain 3 tables', async function () {
    expect(wrapper.contains(<td colSpan="3">Products (USD)</td>)).toBe(true)
  })

  it('is not empty', async function () {
    expect(wrapper.contains(<tr><td></td></tr>)).toBe(false)
  })

  it('should contain price', async function () {
    expect(wrapper.text()).toMatch(/\d+\.\d{2}/)
  })
})
