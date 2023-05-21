import { render, fireEvent } from '@testing-library/react';
import darkTheme from '../themes/darkTheme';
import Header from './Header';

describe('Header', () => {
  let toggleTheme: jest.Mock<() => void>,
    customColor: string,
    lightThemeColor: string;

  beforeAll(() => {
    toggleTheme = jest.fn();
    customColor = darkTheme.palette.customTextColor;
    lightThemeColor = darkTheme.palette.lightThemeColor;
  });

  it('renders the menu items', () => {
    const { getByRole } = render(
      <Header
        toggleTheme={toggleTheme}
        customColor={customColor}
        lightThemeColor={lightThemeColor}
      />
    );

    const aboutMenuItem = getByRole('menuitem', { name: /about/i });
    const galleryMenuItem = getByRole('menuitem', { name: /gallery/i });
    const projectsMenuItem = getByRole('menuitem', { name: /project/i });
    const themeMenutItem = getByRole('menuitem', { name: /toggle theme/i });

    expect(aboutMenuItem).toBeInTheDocument();
    expect(galleryMenuItem).toBeInTheDocument();
    expect(projectsMenuItem).toBeInTheDocument();
    expect(themeMenutItem).toBeInTheDocument();
  });

  it('renders the Toggle Theme button and calls the toggleTheme function when clicked', () => {
    const { getByRole } = render(
      <Header
        toggleTheme={toggleTheme}
        customColor={customColor}
        lightThemeColor={lightThemeColor}
      />
    );

    const toggleThemeButton = getByRole('menuitem', { name: /toggle theme/i });

    expect(toggleThemeButton).toBeInTheDocument();

    fireEvent.click(toggleThemeButton);
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  it('renders the godfreypj text', () => {
    const { getByText } = render(
      <Header
        toggleTheme={toggleTheme}
        customColor={customColor}
        lightThemeColor={lightThemeColor}
      />
    );

    const godfreypjText = getByText(/godfreypj/i);

    expect(godfreypjText).toBeInTheDocument();
  });
});
