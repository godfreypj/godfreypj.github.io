export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div
        className="navbar-start"
        data-testid="godfrey-icon"
        role="navigation"
      >
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
    </div>
  );
}
