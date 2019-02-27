import React from 'react'
import Render from './Render'
import {
  render,
  getByTitle,
  waitForElement
} from 'react-testing-library'

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

