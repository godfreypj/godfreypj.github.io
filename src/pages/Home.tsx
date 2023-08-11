import './Home.css';

export default function Home() {
  return (
    <div className="flex flex-col w-full home-container">
      <div className="grid h-40 card bg-base-300 rounded-box place-items-center">
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Click me to show/hide content</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="main-text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>
      <div className="divider" />
      <div className="grid h-30 card bg-base-300 rounded-box place-items-center featured-content">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            <div className="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>New software update available.</span>
            </div>
          </div>
          <div className="divider lg:divider-horizontal" />
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
}
