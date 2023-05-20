import Header from './components/Header';
import Footer from './components/Footer';
import PhotoGrid from './components/PhotoGrid';
import theme from './theme';
import { Grid, CssBaseline, Box, Card } from '@mui/material';
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
          <Box sx={{ flexGrow: 1 }} justifyContent="center">
            <Card className="main-content">
              <Grid container justifyContent="center">
                <PhotoGrid />
              </Grid>
            </Card>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
