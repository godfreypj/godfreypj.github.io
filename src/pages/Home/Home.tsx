import './Home.css';
import InstaCard from 'components/Social/InstaCard';
import ThreadsCard from 'components/Social/ThreadsCard';
import About from '../About/About';
import Hero from './subcomponents/Hero';

export default function Home() {
  return (
    <div
      className="flex flex-col home-container"
      role="main"
      data-testid="home-container"
    >
      <Hero />
      <div className="grid h-full card bg-primary rounded-box place-items-center">
        <div
          className="collapse"
          data-testid="collapse-bar"
        >
          <input
            role="checkbox"
            aria-label="collapse bar"
            type="checkbox"
          />
          <div
            className="collapse-title text-xl text-primary-content lg:text-left text-center"
            role="navigation"
          >
            Featured Projects
          </div>
          <div className="collapse-content lg:text-left text-center">
            <div className="join join-horizontal">
              <button
                className="btn btn-neutral join-item"
                type="button"
              >
                Sudoku
              </button>
              <button
                className="btn btn-neutral join-item"
                type="button"
              >
                Scrabble
              </button>
              <button
                className="btn btn-neutral join-item"
                type="button"
              >
                Pages
              </button>
            </div>
          </div>
        </div>
      </div>
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
