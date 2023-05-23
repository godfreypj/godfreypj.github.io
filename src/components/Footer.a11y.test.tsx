import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Footer from './footer';

expect.extend(toHaveNoViolations);

test('Footer component should have no accessibility violations', async () => {
  const { container } = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
