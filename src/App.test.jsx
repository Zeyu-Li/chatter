import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the login page for signed-out users', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Sign up here' })).toHaveAttribute('href', '/register');
});
