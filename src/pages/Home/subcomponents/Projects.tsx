export default function Projects() {
  return (
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
  );
}
