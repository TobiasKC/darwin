import { render } from '@redwoodjs/testing/web'

import AppDrawer from './AppDrawer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppDrawer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppDrawer />)
    }).not.toThrow()
  })
})
