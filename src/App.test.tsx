import { render } from '@testing-library/react';
import App from './App';
import renderWithAccessibility from './a11yTestHelper';

// Components
describe('App Renders', () => {
  test('App renders', () => {
    const { getAllByTestId } = render(<App />);
    const appComp = getAllByTestId(/horizontal-menu/i);
    expect(appComp[0]).toBeInTheDocument();
  });
});

// Accessibility
test('App renders without violations', async () => {
  await renderWithAccessibility(<App />);
});
