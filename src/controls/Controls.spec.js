// provide buttons to toggle the closed and locked states
// button text changes to reflect the state the door will be in if clicked
// the close-door toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Controls from './Controls'

afterEach(cleanup)

describe('<Controls />', () => {
  it('renders without crashing', () => {
    render(<Controls />)
  })
  it('open and unlocked', () => {
    const closeSpy = jest.fn()
    const lockSpy = jest.fn()

    const { getByText } = render(
      <Controls
        closed={false}
        locked={false}
        toggleClosed={closeSpy}
        toggleLocked={lockSpy}
      />
    )
    const closeBtn = getByText(/close gate/i)
    const lockBtn = getByText(/lock gate/i)

    expect(closeBtn.disabled).toBeFalsy()
    expect(lockBtn.disabled).toBeTruthy()

    fireEvent.click(closeBtn)
    expect(closeSpy).toBeCalled()

    fireEvent.click(lockBtn)
    expect(lockSpy).not.toBeCalled()
  })
  it('', () => {})
})
