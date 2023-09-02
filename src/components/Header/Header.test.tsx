import { render, RenderResult, fireEvent } from '@testing-library/react';
import React from 'react';
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

  test('hamburger menu opens and closes', () => {
    const elementToBlur = document.createElement('button'); // Create an element to be blurred
    document.body.appendChild(elementToBlur); // Add the element to the document body
    elementToBlur.focus(); // Set the initial focus to the element to be blurred

    const hamMenu = component.getByTestId('hamburger-menu-button');

    // Click the hamburger menu to trigger the dropdown
    fireEvent.click(hamMenu);

    // Click the hamburger menu again to close the dropdown
    fireEvent.click(hamMenu);

    // Check if the element is no longer focused (unblurred)
    expect(document.activeElement).not.toBe(elementToBlur);
  });
  // Accessibility
  test('renders without violations', async () => {
    await renderWithAccessibility(<Header />);
  });
});
