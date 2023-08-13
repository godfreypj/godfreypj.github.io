import { render } from '@testing-library/react';
import renderWithAccessibility from '../../a11yTestHelper';
import Footer from './Footer';

// Components
describe('The footer renders properly', () => {
  test('Horizontal menu renders', () => {
    const { getAllByTestId } = render(<Footer />);
    const footer = getAllByTestId(/footer/i);
    expect(footer[0]).toBeInTheDocument();
  });

  test('Left items render', () => {
    const { getAllByTestId } = render(<Footer />);
    const centerItems = getAllByTestId(/center-footer-items/i);
    expect(centerItems[0]).toBeInTheDocument();
  });

  test('Social logos render', () => {
    const { getAllByTestId } = render(<Footer />);
    const instaLogo = getAllByTestId(/insta-logo/i);
    expect(instaLogo[0]).toBeInTheDocument();
    const threadsLogo = getAllByTestId(/threads-logo/i);
    expect(threadsLogo[0]).toBeInTheDocument();
  });
});

// Accessibility
test('Header renders without violations', async () => {
  await renderWithAccessibility(<Footer />);
});
