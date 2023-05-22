import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from '../components/Header';

expect.extend(toHaveNoViolations);

test('Header component should have no accessibility violations', async () => {
  const { container } = render(
    <Header
      toggleTheme={function (): void {
        throw new Error('Function not implemented.');
      }}
      customColor={''}
      lightThemeColor={''}
    />
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
