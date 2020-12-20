import { render, screen } from '@testing-library/react'
import InsurancePolicies from './InsurancePolicies'

test('does not render health policy', () => {
  render(<InsurancePolicies />)
  expect(() => {
    screen.getByText(/Health/i)
  }).toThrow()
})

test('renders 4 policies', () => {
  render(<InsurancePolicies />)
  const policies = screen.getAllByTestId('policy')
  expect(policies).toHaveLength(4)
})

test('expects all policies have status', () => {
  render(<InsurancePolicies />)
  const policies = screen.getAllByTestId('policy')
  const statuses = screen.getAllByTestId('status')
  expect(statuses.length).toBe(policies.length)
})

