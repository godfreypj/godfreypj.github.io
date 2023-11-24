import './Home.css';
import InstaCard from 'components/Social/InstaCard';
import ThreadsCard from 'components/Social/ThreadsCard';
import About from '../About/About';
import Hero from './subcomponents/Hero';
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
      <div className="divider" />
      <div
        className="shadow-xl rounded flex flex-col lg:flex-row h-full"
        data-testid="social-container"
      >
        <div className="p-3 lg:w-1/3">
          <h1 className="prose lg:prose-2xl text-center sm:text-left">Instagram</h1>
          <InstaCard url="https://www.instagram.com/p/CopLsLROmNx/" />
        </div>
        <div className="lg:p-4 lg:w-2/3">
          <h1 className="prose lg:prose-2xl text-center sm:text-left">Threads</h1>
          <ThreadsCard url="https://www.threads.net/@phil.captures/post/CwbSPnLu-GP/" />
        </div>
      </div>
      <About />
    </div>
  );
}
