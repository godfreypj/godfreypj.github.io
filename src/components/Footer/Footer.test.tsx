import { render, RenderResult } from '@testing-library/react';
import Footer from './Footer';
import renderWithAccessibility from '../../a11yTestHelper';

// Components
describe('Footer Component', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Footer />);
  });

  test('renders horizontal menu', () => {
    const footer = component.getAllByTestId(/footer/i);
    expect(footer[0]).toBeInTheDocument();
  });

  test('renders left items', () => {
    const centerItems = component.getAllByTestId(/center-footer-items/i);
    expect(centerItems[0]).toBeInTheDocument();
  });

  test('renders social logos', () => {
    const instaLogo = component.getAllByTestId(/insta-logo/i);
    expect(instaLogo[0]).toBeInTheDocument();

    const threadsLogo = component.getAllByTestId(/threads-logo/i);
    expect(threadsLogo[0]).toBeInTheDocument();
  });

  // Accessibility
  test('renders without violations', async () => {
    await renderWithAccessibility(<Footer />);
  });
});
