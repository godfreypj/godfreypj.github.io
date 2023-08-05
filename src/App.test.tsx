import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const myElement = screen.getByText(/My App/i);
  expect(myElement).toBeInTheDocument();
});
