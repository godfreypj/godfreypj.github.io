import { render, fireEvent } from '@testing-library/react';
import darkTheme from '../themes/darkTheme';
import Header from './Header';

describe('Header', () => {
  it('renders the menu items', () => {
    const toggleTheme = jest.fn();
    const customColor = darkTheme.palette.customTextColor;

    // Render the header
    const { getByRole } = render(
      <Header toggleTheme={toggleTheme} customColor={customColor} />
    );
    const aboutMenuItem = getByRole('menuitem', { name: /about/i }); // Use role and regular expression matcher
    const galleryMenuItem = getByRole('menuitem', { name: /gallery/i });
    const projectsMenuItem = getByRole('menuitem', { name: /project/i });
    const themeMenutItem = getByRole('menuitem', { name: /toggle theme/i });

    expect(aboutMenuItem).toBeInTheDocument();
    expect(galleryMenuItem).toBeInTheDocument();
    expect(projectsMenuItem).toBeInTheDocument();
    expect(themeMenutItem).toBeInTheDocument();
  });
  it('renders the Toggle Theme button and calls the toggleTheme function when clicked', () => {
    const toggleTheme = jest.fn();
    const customColor = darkTheme.palette.customTextColor;
    const { getByRole } = render(
      <Header toggleTheme={toggleTheme} customColor={customColor} />
    );
    const toggleThemeButton = getByRole('menuitem', { name: /toggle theme/i });

    expect(toggleThemeButton).toBeInTheDocument();

    fireEvent.click(toggleThemeButton);
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
  it('renders the godfreypj text', () => {
    const toggleTheme = jest.fn();
    const customColor = darkTheme.palette.customTextColor;
    const { getByText } = render(
      <Header toggleTheme={toggleTheme} customColor={customColor} />
    );
    const godfreypjText = getByText(/godfreypj/i);

    expect(godfreypjText).toBeInTheDocument();
  });
});
