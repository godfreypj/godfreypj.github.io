import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customTextColor: string;
    lightThemeColor: string;
  }
  interface PaletteOptions {
    customTextColor?: string;
    lightThemeColor?: string;
  }
}

const lightTheme = createTheme({
  palette: {
    customTextColor: 'rgba(255,253,208,0.71)',
    lightThemeColor: 'rgba(0, 0, 0, 0.54)',
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
      default: 'rgba(225, 242, 225, 1)',
      paper: 'rgba(255, 255, 255, 1)',
    },
  },
});

export default lightTheme;
