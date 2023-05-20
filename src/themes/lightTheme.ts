import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customTextColor: string;
  }
  interface PaletteOptions {
    customTextColor?: string;
  }
}

const lightTheme = createTheme({
  palette: {
    customTextColor: 'rgba(255,253,208,0.71)',
    primary: {
      main: 'rgba(211, 138, 55, 0.84)',
    },
    secondary: {
      main: '#rgba(102, 187, 106, 1)',
    },
    error: {
      main: 'rgba(244, 67, 54, 1)',
    },
    success: {
      main: 'rgba(76, 175, 80, 1)',
    },
    background: {
      default: 'rgba(250, 250, 250, 1)',
      paper: 'rgba(255, 255, 255, 1)',
    },
  },
});

export default lightTheme;
