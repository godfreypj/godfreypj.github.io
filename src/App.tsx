import Home from 'pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div role="navigation" aria-label="main nav">
        <Header />
      </div>
      <Home />
      <Footer />
    </>
  );
}

export default App;
