import './Home.css';
import InstaCard from 'components/Social/InstaCard';
import ThreadsCard from 'components/Social/ThreadsCard';
import cityImage from '../assets/city.jpg';

export default function Home() {
  return (
    <div
      className="flex flex-col home-container"
      role="main"
    >
      <div
        className="hero min-h-screen hero-height"
        style={{
          backgroundImage: `url(${cityImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-1 text-neutral-50">I am a software engineer; mass native.</p>
            <p className="mb-1 text-neutral-50">
              This is a spot for my projects, thoughts, and other stuff.
            </p>
            <p className="mb-0 text-neutral-50">Enjoy.</p>
          </div>
        </div>
      </div>
      <div className="grid h-full card bg-base-300 rounded-box place-items-center">
        <div className="collapse bg-base-200">
          <input
            aria-label="collapse bar"
            type="checkbox"
          />
          <div className="collapse-title text-xl text-neutral-focus">Featured Projects</div>
          <div className="collapse-content">
            <div className="join join-vertical lg:join-horizontal">
              <button
                className="btn btn-accent join-item"
                type="button"
              >
                Sudoku
              </button>
              <button
                className="btn btn-accent join-item"
                type="button"
              >
                Scrabble
              </button>
              <button
                className="btn btn-accent join-item"
                type="button"
              >
                Pages
              </button>
            </div>
          </div>
        </div>
        <div className="main-text-content">
          Thanks for stopping by. Above you will find some personal projects; my apps come from
          fun, school & divine inspiration. Feel free to browse the blog where you can read about
          dumb stuff I feel compelled to share with the world.
        </div>
      </div>
      <div className="divider" />
      <div className="card lg:card-side bg-base-300 shadow-xl mt-1 p-0.5">
        <div className="card-actions items-center justify-center m-7">
          <InstaCard url="https://www.instagram.com/p/CopLsLROmNx/" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-neutral-focus">Instagram</h2>
          <p className="p-0 m-0">
            I like to take pictures, and I post those pictures on Instagram. Take a look, if you
            feel like it.
          </p>
          <h2 className="card-title text-neutral-focus pt-0 mt-0">Threads</h2>
          <p>I am always saying something on here...</p>
          <div className="w-full indicator justify-center">
            <span className="indicator-item badge badge-secondary">typing…</span>
            <ThreadsCard url="https://www.threads.net/@phil.captures/post/Cv3fgMoMmwi/" />
          </div>
        </div>
      </div>
    </div>
  );
}
