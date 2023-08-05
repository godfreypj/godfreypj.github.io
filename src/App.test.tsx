import { render, screen } from '@testing-library/react';
import { renderWithAccessibility } from './a11yTestHelper';
import App from './App';

// Components
test('renders learn react link', () => {
  render(<App />);
  const myElement = screen.getByText(/My App/i);
  expect(myElement).toBeInTheDocument();
});

// Accessibility
test('my app renders without violations', async () => {
  await renderWithAccessibility(<App />);
});
