export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div
        className="navbar-start"
        role="navigation"
      >
        {/* Hamburger menu */}
        <div
          className="dropdown"
          data-testid="hamburger-menu"
        >
          <button
            aria-label="logo button"
            type="button"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            role="menu"
            className="menu menu-sm dropdown-content bg-neutral
           mt-3 z-[1] p-2 shadow rounded-box w-32"
          >
            <li role="menuitem">
              <a
                tabIndex={0}
                href="/"
              >
                Home
              </a>
            </li>
            <li role="menuitem">
              <a
                tabIndex={0}
                href="/about"
              >
                About
              </a>
            </li>
            <li role="menuitem">
              <a tabIndex={0}>Blog</a>
            </li>
          </ul>
        </div>
        <div role="menu">
          <a
            role="menuitem"
            className="btn btn-ghost normal-case text-xl"
            tabIndex={0}
          >
            godfreypj
          </a>
        </div>
      </div>
      {/* Main horizontal menu */}
      <div
        data-testid="horizontal-menu"
        className="navbar-center hidden lg:flex prose"
        role="navigation"
        aria-label="horizontal menu"
      >
        <ul
          className="menu menu-horizontal px-1"
          role="menu"
        >
          <li
            role="menuitem"
            className="px-4 prose-a:hover:font-bold"
          >
            <a
              tabIndex={0}
              href="/"
            >
              Home
            </a>
          </li>
          <li
            role="menuitem"
            className="px-4 prose-a:hover:font-bold"
          >
            <a
              tabIndex={0}
              href="/about"
            >
              About
            </a>
          </li>
          <li
            role="menuitem"
            className="px-4 prose-a:hover:font-bold"
          >
            <a tabIndex={0}>Blog</a>
          </li>
        </ul>
      </div>
      {/* Search Bar */}
      <div
        className="navbar-end"
        data-testid="search-bar"
      >
        <button
          tabIndex={0}
          type="button"
          className="btn btn-ghost btn-circle"
          aria-label="search button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
