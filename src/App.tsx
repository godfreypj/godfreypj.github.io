import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>yourface</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
