import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the menu items', () => {
    // Render the header
    const { getByRole } = render(<Header />);
    const aboutMenuItem = getByRole('menuitem', { name: /about/i }); // Use role and regular expression matcher
    const galleryMenuItem = getByRole('menuitem', { name: /gallery/i });
    const projectsMenuItem = getByRole('menuitem', { name: /project/i });

    expect(aboutMenuItem).toBeInTheDocument();
    expect(galleryMenuItem).toBeInTheDocument();
    expect(projectsMenuItem).toBeInTheDocument();
  });
  it('renders the godfreypj text', () => {
    const { getByText } = render(<Header />);
    const godfreypjText = getByText(/godfreypj/i);

    expect(godfreypjText).toBeInTheDocument();
  });
});
