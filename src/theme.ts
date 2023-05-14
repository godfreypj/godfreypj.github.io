import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#290019',
      light: '#e8e2e5',
      dark: '#290019',
    },
    secondary: {
      main: '#ff5f1f',
      light: '#fff0eb',
      dark: '#ff5f1f',
    },
    error: {
      main: '#fe011c',
    },
    success: {
      main: '#9afe01',
      light: '#f5ffee',
      dark: '#9afe01',
    },
    background: {
      default: '#DDDBC0',
    },
  },
});

export default theme;
