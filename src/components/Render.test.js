import React from 'react'
import Table from './Table'
import { mount } from 'enzyme'
import Render from './Render'

describe('components/Render', function () {
  it('should contain 3 tables', async function () {
    const wrapper = mount(<Render />)
    expect(wrapper.contains(<td colSpan="3">Products (NZD)</td>)).toBe(true)
    expect(wrapper.contains(<td colSpan="3">Products (USD)</td>)).toBe(true)
    expect(wrapper.contains(<td colSpan="3">Products (EUR)</td>)).toBe(true)
  })

  it('is not empty', async function () {
    const wrapper = mount(<Table />)
    expect(wrapper.contains(<tr><td></td></tr>)).toBe(false)
  })

  it('should contain price', async function () {
    const wrapper = mount(<Table />)
    expect(wrapper.text()).toMatch(/\d+\.\d{2}/)
  })
})
