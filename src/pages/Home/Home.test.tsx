import { render, RenderResult } from '@testing-library/react';
import Home from './Home';
import renderWithAccessibility from '../../a11yTestHelper';

// Mock the social components
jest.mock('components/Social/InstaCard', () => function MockInstaCard() {
  return (
    <div data-testid="mock-insta-card">
      {/* Mocked InstaCard content */}
    </div>
  );
});

jest.mock('components/Social/ThreadsCard', () => function MockThreadsCard() {
  return (
    <div data-testid="mock-threads-card">
      {/* Mocked ThreadsCard content */}
    </div>
  );
});

describe('Home Component', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Home />);
  });

  test('renders main container', () => {
    const mainContainer = component.getByTestId('home-container');
    expect(mainContainer).toBeInTheDocument();
  });

  test('renders hero banner', () => {
    const heroBanner = component.getByTestId('hero-banner');
    expect(heroBanner).toBeInTheDocument();
  });

  test('renders banner overlay text', () => {
    const heroOverlay = component.getByTestId('hero-overlay');
    expect(heroOverlay).toBeInTheDocument();
  });

  test('renders collapse bar', () => {
    const collapseBar = component.getByTestId('collapse-bar');
    expect(collapseBar).toBeInTheDocument();
  });

  test('renders main content', () => {
    const mainContent = component.getByTestId('main-content');
    expect(mainContent).toBeInTheDocument();
  });

  test('renders social container', () => {
    const socialContainer = component.getByTestId('social-container');
    expect(socialContainer).toBeInTheDocument();
  });

  // Accessibility
  test('renders without violations', async () => {
    await renderWithAccessibility(<Home />);
  });
});
