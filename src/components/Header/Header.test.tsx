import { render, RenderResult } from '@testing-library/react';
import Header from './Header';
import renderWithAccessibility from '../../a11yTestHelper';

// Components
describe('Header Component', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Header />);
  });

  test('renders horizontal menu', () => {
    const horizMenu = component.getAllByTestId(/horizontal-menu/i);
    expect(horizMenu[0]).toBeInTheDocument();
  });

  test('renders search bar', () => {
    const searchBar = component.getAllByTestId(/search-bar/i);
    expect(searchBar[0]).toBeInTheDocument();
  });

  test('renders hamburger menu hidden on full-size screen', () => {
    const hamMenu = component.getAllByTestId(/hamburger-menu/i);
    const button = hamMenu[0].querySelector('button');
    expect(button).toHaveClass('lg:hidden');
  });
});

// Accessibility
test('renders without violations', async () => {
  await renderWithAccessibility(<Header />);
});
