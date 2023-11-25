export default function Timeline() {
  return (
    <div
      className="flex lg:p-5 lg:m-10 mb-5 mt-5 w-full justify-center bg-gradient-to-r from-secondary to-secondary-focus rounded-3xl"
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
