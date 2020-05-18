import React from 'react'
import Dashboard from './Dashboard'
import { render, fireEvent } from '@testing-library/react'

describe('<Dashboard />', () => {
  beforeEach(cleanup)
  it('renders without crashing', () => {
    render(<Dashboard />)
  })
})

describe('<Dashboard /> state transitions', () => {
  const { getByText } = render(<Dashboard />)
  it('default state open and unlocked', () => {
    getByText(/^open$/i) // verify open and unlocked
    getByText(/^unlocked$/i)
    getByText(/^lock gate$/i)
    getByText(/^close gate$/i)
  })
  it('open and unlocked to closed and unlocked', () => {
    const lockBtn = getByText(/^lock gate$/i)
    fireEvent.click(lockBtn)
    getByText(/^closed$/i)
    getByText(/^unlocked$/i)
    getByText(/^lock gate$/i)
    getByText(/^open gate$/i)
  })
  it('closed and unlocked to closed and unlocked', () => {
    const closeBtn = getByText(/^close gate$/i)
    fireEvent.click(closeBtn)
    getByText(/^closed$/i)
    getByText(/^locked$/i)
    getByText(/^unlock gate$/i)
    getByText(/^open gate$/i)

  })

  // it('matches snapshot', () => {
  //   const tree = renderer.create(<Dashboard />)
  //   expect(tree.toJSON()).toMatchSnapshot()
  // })
})
