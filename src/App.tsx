import logo from './assets/logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './theme';
import { Grid, CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          <Header />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center">
              <img src={logo} className="main-logo" alt="logo" />
            </Grid>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
