import React from 'react'
import App from './App'
import Render from './Render'
import { mount } from 'enzyme'

describe('components/App', function () {
  it('should render component', async function () {
    const wrapper = mount(<App />)
    expect(wrapper.contains(<Render />)).toBe(true)
  })
})
