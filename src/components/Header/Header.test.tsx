import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import Header from './Header';
import renderWithAccessibility from '../../a11yTestHelper';

// Components
describe('Header Component', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Header />);
  });

  test('renders godfrey icon', () => {
    const godfreyIcon = component.getAllByTestId(/godfrey-icon/i);
    expect(godfreyIcon[0]).toBeInTheDocument();
  });

  test('renders search bar', () => {
    const searchBar = component.getAllByTestId(/search-bar/i);
    expect(searchBar[0]).toBeInTheDocument();
  });
  // Accessibility
  test('renders without violations', async () => {
    await renderWithAccessibility(<Header />);
  });
});
