import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="about"
          element={<About />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
