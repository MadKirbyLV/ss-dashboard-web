import { render, screen } from '@testing-library/react'
import App from './App'

test('renders insurance policies', () => {
  render(<App />)
  const component = screen.getByText(/Insurance Policies/i)
  expect(component).toBeInTheDocument()
})
