import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './App';

// Mock the Header, Footer, and PhotoGrid components
const HeaderMock = () => <div>Header</div>;
HeaderMock.displayName = 'Header';
jest.mock('./components/Header', () => HeaderMock);

const FooterMock = () => <div>Footer</div>;
FooterMock.displayName = 'Footer';
jest.mock('./components/Footer', () => FooterMock);

const PhotoGridMock = () => <div>PhotoGrid</div>;
PhotoGridMock.displayName = 'PhotoGrid';
jest.mock('./components/PhotoGrid', () => PhotoGridMock);

expect.extend(toHaveNoViolations);

test('App component should have no accessibility violations', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});