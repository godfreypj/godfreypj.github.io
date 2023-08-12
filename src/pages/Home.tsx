import './Home.css';
import InstaCard from 'components/Social/InstaCard';
import cityImage from '../assets/city.jpg';
import threadsLogo from '../assets/threadsLogo.svg';

export default function Home() {
  return (
    <div
      className="flex flex-col home-container"
      role="main"
    >
      <div
        className="hero min-h-screen hero-class"
        style={{
          backgroundImage: `url(${cityImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5 text-neutral-50">
              I am a software engineer; mass native.
              {' '}
              <br />
              This is a spot for my projects, thoughts, and other stuff.
              {' '}
              <br />
              Enjoy.
            </p>
          </div>
        </div>
      </div>
      <div className="grid h-40 card bg-base-300 rounded-box place-items-center">
        <div className="collapse bg-base-200">
          <input
            aria-label="collapse bar"
            type="checkbox"
          />
          <div className="collapse-title text-xl text-neutral-focus">Featured Projects</div>
          <div className="collapse-content">
            <span className="text-accent-focus projects-row">
              <p>Sudoku | Pages | Scrabble | Cylcones</p>
            </span>
          </div>
        </div>
        <div className="main-text-content">
          Thanks for stopping by. Above you will find some personal projects; my apps come from
          fun, school & divine inspiration. Feel free to browse the blog where you can read about
          dumb stuff I feel compelled to share with the world.
        </div>
      </div>
      <div className="divider" />
      <div className="card md:card-side bg-base-300 shadow-xl m-10 p-0.5">
        <div className="card-actions">
          <InstaCard url="https://www.instagram.com/p/CopLsLROmNx/" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-neutral-focus">Instagram</h2>
          <p>
            I like to take pictures, and I post those pictures on Instagram. Take a look, if you
            feel like it.
          </p>
          <h2 className="card-title text-neutral-focus pt-10">Threads</h2>
          <p>I am always saying something on here...</p>
          <p className="p-20">
            <div className="avatar indicator">
              <span className="indicator-item badge badge-secondary">typing…</span>
              <div className="w-20 h-20 rounded-lg">
                <img
                  src={threadsLogo}
                  alt="threads logo"
                />
              </div>
            </div>
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              type="button"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
