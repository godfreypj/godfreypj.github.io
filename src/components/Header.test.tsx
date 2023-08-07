import { render } from '@testing-library/react';
import renderWithAccessibility from '../a11yTestHelper';
import Header from './Header';

// Components
describe('The navbar renders and functions correctly', () => {
  test('Horizontal menu renders', () => {
    const { getAllByTestId } = render(<Header />);
    const horizMenu = getAllByTestId(/horizontal-menu/i);
    expect(horizMenu[0]).toBeInTheDocument();
  });

  test('Search bar renders', () => {
    const { getAllByTestId } = render(<Header />);
    const searchBar = getAllByTestId(/search-bar/i);
    expect(searchBar[0]).toBeInTheDocument();
  });

  test('Hamburger menu renders hidden when screen is full size', () => {
    const { getAllByTestId } = render(<Header />);
    const hamMenu = getAllByTestId(/hamburger-menu/i);
    // Get the button element within the div element
    const button = hamMenu[0].querySelector('button');
    // Check if the button has the 'lg:hidden' class
    expect(button).toHaveClass('lg:hidden');
  });
});

// Accessibility
test('Header renders without violations', async () => {
  await renderWithAccessibility(<Header />);
});
