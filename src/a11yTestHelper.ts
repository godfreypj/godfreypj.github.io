import '@testing-library/jest-dom/extend-expect';
import { act } from '@testing-library/react';
import { ReactElement, JSXElementConstructor } from 'react';
import { createRoot } from 'react-dom/client';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

// Custom helper function to render a component and perform accessibility testing
export default async function renderWithAccessibility(
  component: ReactElement<unknown, string | JSXElementConstructor<unknown>>,
) {
  const container = document.createElement('div');
  act(() => {
    createRoot(container).render(component);
  });
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  return container;
}
