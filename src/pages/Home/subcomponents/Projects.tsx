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
              <a
                target="_blank"
                href="https://github.com/godfreypj/intro-to-ai/tree/dev/sudoku_solver"
                rel="noreferrer"
              >
                Sudoku
              </a>
            </button>
            <button
              className="btn btn-neutral join-item"
              type="button"
            >
              <a
                target="_blank"
                href="https://github.com/godfreypj/intro-to-ai/tree/dev/the_right_move"
                rel="noreferrer"
              >
                Scrabble
              </a>
            </button>
            <button
              className="btn btn-neutral join-item"
              type="button"
            >
              <a
                target="_blank"
                href="https://github.com/godfreypj/godfreypj.github.io"
                rel="noreferrer"
              >
                Pages
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
