import React from 'react'
// import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
import 'jest-dom/extend-expect'
import Display from './Display'

afterEach(cleanup)

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />)
  })
  it('open and unlocked', () => {
    const { getByText, queryByText } = render(
      <Display closed={false} locked={false} />
    )
    const unlock = getByText(/unlocked/i)
    const open = getByText(/open/i)
    expect(unlock).toHaveClass('green-led')
    expect(queryByText(/closed/i)).toBe(null)
  })
  it('closed and unlocked', () => {
    const { getByText } = render(<Display closed={true} locked={false} />)
    getByText(/unlocked/i)
    getByText(/closed/i)
  })
  it('closed and locked', () => {
    const { getByText } = render(<Display closed={true} locked={true} />)
    getByText(/^locked$/i)
    getByText(/closed/i)
  })
  // it('matches snapshot', () => {
  //   const tree = renderer.create(<Display />)
  //   expect(tree.toJSON()).toMatchSnapshot()
  // })
  // it('defaults to unlocked and open', () => {
  //   const { getByText } = render(<Display />)
  //   const unlocked = getByText(/unlocked/i)
  //   expect(unlocked).toHaveTextContent('Unlocked')
  //   const open = getByText(/open/i)
  //   expect(open).toHaveTextContent('Open')
  // })
  // it("displays 'Closed if 'closed' prop is true and 'Open' otherwise", () => {
  //   const { getByText } = render(<Display closed={true} />)
  //   const closedGate = getByText(/closed/i)
  //   expect(closedGate.className).toBe('led red-led')
  // })
  // it("displays 'Locked' if 'locked' prop is true and 'Unlocked' otherwise", () => {
  //   const { getByText } = render(<Display locked={true} />)
  //   const locked = getByText(/locked/i)
  //   expect(locked.className).toBe('led red-led')
  //   // expect(unlocked.className).toBe('led green-led')
  // })

  // displays closed if 'closed' prop is true and 'open' otherwise
  // displays locked if 'locked' prop is true and 'unlocked' otherwise
  // when locked or closed, use the red-led class
  // when unlocked or open, use the green-led class

  // xit('cannot be closed or open if locked', () => {
  //   const open = jest.fn()
  //   const { getByText } = render(<Display open={open} />)
  //   const closeGate = getByText(/close gate/i)
  //   const lockGate = getByText(/lock gate/i)
  //   fireEvent.click(closeGate)
  //   fireEvent.click(lockGate)
  //   expect(open).not.toHaveBeenCalled()
  // })

  // it('displays gate open/closed or locked/unlocked', () => {})
})
