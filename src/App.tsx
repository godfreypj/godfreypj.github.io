import Header from './components/header';
import Footer from './components/footer';
import PhotoGrid from './components/photo-grid.component';
import darkTheme from './themes/dark.theme';
import lightTheme from './themes/light.theme';
import { Grid, CssBaseline, Box, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './app.css';
import React from 'react';

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          <Header
            toggleTheme={toggleTheme}
            customColor={theme.palette.customTextColor}
            lightThemeColor={theme.palette.lightThemeColor}
          />
          <Box sx={{ flexGrow: 1 }} justifyContent="center">
            <Paper className="main-content">
              <Grid container justifyContent="center">
                <PhotoGrid />
              </Grid>
            </Paper>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
