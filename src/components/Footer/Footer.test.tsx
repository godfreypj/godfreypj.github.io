import { render } from '@testing-library/react';
import renderWithAccessibility from '../../a11yTestHelper';
import Footer from './Footer';

// Components
describe('The footer renders and functions correctly', () => {
  test('Horizontal menu renders', () => {
    const { getAllByTestId } = render(<Footer />);
    const footer = getAllByTestId(/footer/i);
    expect(footer[0]).toBeInTheDocument();
  });

  test('Search bar renders', () => {
    const { getAllByTestId } = render(<Footer />);
    const centerItems = getAllByTestId(/center-footer-items/i);
    expect(centerItems[0]).toBeInTheDocument();
  });

  test('Hamburger menu renders hidden when screen is full size', () => {
    const { getAllByTestId } = render(<Footer />);
    const rightItems = getAllByTestId(/right-footer-items/i);
    expect(rightItems[0]).toBeInTheDocument();
  });
});

// Accessibility
test('Header renders without violations', async () => {
  await renderWithAccessibility(<Footer />);
});
