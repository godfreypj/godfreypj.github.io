import { render } from '@testing-library/react';
import renderWithAccessibility from '../../a11yTestHelper';
import InstaCard from './InstaCard';
import ThreadsCard from './ThreadsCard';

// Components
describe('Social cards', () => {
  test('Instagram Card renders', () => {
    // TODO hardcoded URL
    const { getAllByTestId } = render(<InstaCard url="https://www.instagram.com/p/CopLsLROmNx/" />);
    const instaFrame = getAllByTestId(/insta-frame/i);
    expect(instaFrame[0]).toBeInTheDocument();
  });
  test('Threads Card renders', () => {
    // TODO hardcoded URL
    const { getAllByTestId } = render(
      <ThreadsCard url="https://www.threads.net/@phil.captures/post/Cv3fgMoMmwi/" />,
    );
    const threadsFrame = getAllByTestId(/threads-frame/i);
    expect(threadsFrame[0]).toBeInTheDocument();
  });
});

// Accessibility
test('Social Cards render without violations', async () => {
  await renderWithAccessibility(<InstaCard url="https://www.instagram.com/p/CopLsLROmNx/" />);
  await renderWithAccessibility(
    <ThreadsCard url="https://www.threads.net/@phil.captures/post/Cv3fgMoMmwi/" />,
  );
});
