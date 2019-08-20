import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'

import Display from './Display'


describe('<Display />', () => {
  // afterEach(cleanup)
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('defaults to unlocked and open', () => {
    const { getByText } = render(<Display />)
    const unlocked = getByText(/unlocked/i)
    expect(unlocked).toHaveTextContent('Unlocked')
    const open = getByText(/open/i)
    expect(open).toHaveTextContent('Open')
  })
  it('displays open/closed or locked/unlocked', () => {

  })
  // displays closed if 'closed' prop is true and 'open' otherwise
  // displays locked if 'locked' prop is true and 'unlocked' otherwise
  // when locked or closed, use the red-led class
  // when unlocked or open, use the green-led class

  xit('cannot be closed or open if locked', () => {
    const open = jest.fn()
    const { getByText } = render(<Display open={open} />)
    const closeGate = getByText(/close gate/i)
    const lockGate = getByText(/lock gate/i)
    fireEvent.click(closeGate)
    fireEvent.click(lockGate)
    expect(open).not.toHaveBeenCalled()
  })

  // it('displays gate open/closed or locked/unlocked', () => {})
})
