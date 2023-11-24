export default function Timeline() {
  return (
    <div
      className="flex lg:p-5 m-10 justify-center bg-gradient-to-r from-secondary to-secondary-focus rounded-3xl"
      role="document"
    >
      <ul
        className="steps"
        role="list"
      >
        <li
          className="step lg:w-44 step-neutral prose lg:prose-lg"
          role="listitem"
        >
          College
        </li>
        <li
          className="step lg:w-44 step-neutral prose lg:prose-lg"
          role="listitem"
        >
          U.S. Navy
        </li>
        <li
          className="step lg:w-44 step-neutral prose lg:prose-lg"
          role="listitem"
        >
          Guam
        </li>
        <li
          className="step lg:w-44 step-neutral prose lg:prose-lg"
          role="listitem"
        >
          Boston
        </li>
      </ul>
    </div>
  );
}
