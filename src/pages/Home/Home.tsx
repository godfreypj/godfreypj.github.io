import './Home.css';

import About from '../About/About';
import Hero from './subcomponents/Hero';
import Social from './subcomponents/Social';
import Projects from './subcomponents/Projects';

export default function Home() {
  return (
    <div
      className="flex flex-col home-container"
      role="main"
      data-testid="home-container"
    >
      <Hero />
      <Projects />
      <About />
      <div className="divider" />
      <Social />
    </div>
  );
}
