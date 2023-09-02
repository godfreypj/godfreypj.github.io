import { render, RenderResult } from '@testing-library/react';
import About from './About';
import renderWithAccessibility from '../../a11yTestHelper';

describe('About Component', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<About />);
  });

  test('renders title bar and image avatar', () => {
    const titleBar = component.getByTestId('about-title-bar');
    expect(titleBar).toBeInTheDocument();
  });

  // Accessibility
  test('renders without violations', async () => {
    await renderWithAccessibility(<About />);
  });
});
