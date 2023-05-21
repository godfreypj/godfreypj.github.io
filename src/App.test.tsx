import { render } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './themes/darkTheme';
import React from 'react';

// Mock the theme provider
jest.mock('@mui/material/styles', () => {
  return {
    ...jest.requireActual('@mui/material/styles'),
    ThemeProvider: jest.fn(({ children }) => <>{children}</>),
  };
});

describe('App', () => {
  it('passes the correct theme prop to ThemeProvider', () => {
    render(<App />);
    expect(ThemeProvider).toHaveBeenCalledWith(
      expect.objectContaining({ theme: darkTheme }),
      expect.anything()
    );
  });
});
