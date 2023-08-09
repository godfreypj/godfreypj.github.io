import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div role="navigation" aria-label="main nav">
        <Header />
      </div>
      <div role="main">
        <br />
        <h1 className="text-2xl font-bold underline" role="heading">My App</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
