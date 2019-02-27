import React from 'react'
import Render from './Render'
import Table from './Table'
import {
  render,
  getByTitle,
  getByLabelText,
  wait,
  waitForElement
} from 'react-testing-library'

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
    const { container } = render(<Render />)
    const h2 = getByTitle(container, 'content');
    expect(h2).toBeDefined()
    expect(h2.textContent).toBe('Loading, please wait ...');
  })

  it('should mount Table when data fetched', async function () {
    const { container } = render(<Render />)
    const table = await waitForElement(
      () => getByTitle(container, 'currency'),
      { container }
    )
    expect(table).toBeDefined()
  })
})

