import Header from './components/Header';
import Footer from './components/Footer';
import PhotoGrid from './components/PhotoGrid';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
import { Grid, CssBaseline, Box, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';

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
