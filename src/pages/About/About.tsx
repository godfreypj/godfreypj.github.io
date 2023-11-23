import selfie from '../../assets/selfie.jpg';
import python from '../../assets/python.png';
import html5 from '../../assets/html5.png';
import java from '../../assets/java.png';
import cpp from '../../assets/cpp.png';

export default function About() {
  return (
    <>
      <div
        className="flex flex-row lg:h-16 mt-10 rounded bg-gradient-to-l
                from-accent to-neutral-focus hover:bg-gradient-to-r"
        data-testid="about-title-bar"
        role="document"
      >
        <article
          className="prose flex-grow font-bold lg:text-base pl-1 pt-4 lg:pl-20 p-0 m-0 text-xs"
          data-testid="about-quote"
          role="document"
        >
          Software Engineer, New England native & Navy veteran.
        </article>
        <div
          className="avatar flex-none self-center lg:ml-24 p-0 m-0"
          data-testid="avatar"
          role="img"
          aria-label="Selfie"
        >
          <div
            className="rounded-full w-28 ring ring-primary ring-offset-base-100 ring-offset-2"
            data-testid="selfie-ring"
          >
            <img
              src={selfie}
              alt="selfie "
            />
          </div>
        </div>
      </div>
      <div
        className="flex lg:p-10 m-10 justify-center bg-gradient-to-r from-secondary to-secondary-focus rounded-3xl"
        role="document"
      >
        <ul
          className="steps"
          role="list"
        >
          <li
            className="step lg:w-60 step-neutral prose lg:prose-lg"
            role="listitem"
          >
            College
          </li>
          <li
            className="step lg:w-60 step-neutral prose lg:prose-lg"
            role="listitem"
          >
            U.S. Navy
          </li>
          <li
            className="step lg:w-60 step-neutral prose lg:prose-lg"
            role="listitem"
          >
            Guam
          </li>
          <li
            className="step lg:w-60 step-neutral prose lg:prose-lg"
            role="listitem"
          >
            Boston
          </li>
        </ul>
      </div>
      <div
        data-testid="about-skills"
        className="flex justify-center mt-10"
        role="region"
      >
        <div className="card lg:w-96 lg:h-full sm:w-20 bg-primary text-primary-content lg:m-8 m-2 h-20 w-20 items-center">
          <div className="card-body p-6">
            <h2 className="card-title prose lg:prose-xl sm:block hidden">Web Dev</h2>
            <p className="lg:flex items-center prose sm:block hidden">
              React applications & java/spring back-ends.
            </p>
            <div className="card-actions lg:justify-end justify-center pb-3 ml-auto w-20">
              <img
                src={html5}
                alt="html5 icon"
                className="lg:w-14 w-10 h-10"
              />
            </div>
          </div>
        </div>
        <div className="card lg:w-96 lg:h-full sm:w-20 bg-primary text-primary-content lg:m-8 m-2 h-20 w-20 items-center">
          <div className="card-body p-6">
            <h2 className="card-title prose lg:prose-xl sm:block hidden">Java/Spring</h2>
            <p className="lg:flex items-center prose sm:block hidden">
              WebApps & SOAP and REST APIs.
            </p>
            <div className="card-actions lg:justify-end justify-center pb-6 ml-auto w-20">
              <img
                src={java}
                alt="java icon"
                className="lg:w-14 w-10"
              />
            </div>
          </div>
        </div>
        <div className="card lg:w-96 lg:h-full sm:w-20 bg-primary text-primary-content lg:m-8 m-2 h-20 w-20 items-center">
          <div className="card-body p-6">
            <h2 className="card-title prose lg:prose-xl sm:block hidden">Python</h2>
            <p className="lg:flex items-center prose sm:block hidden">
              Back-end Flask apps; MFE architecture.
            </p>
            <div className="card-actions lg:justify-end justify-center pb-6 ml-auto w-20">
              <img
                src={python}
                alt="python icon"
                className="lg:w-14 w-10"
              />
            </div>
          </div>
        </div>
        <div className="card lg:w-96 lg:h-full sm:w-20 bg-primary text-primary-content lg:m-8 m-2 h-20 w-20 items-center">
          <div className="card-body p-6">
            <h2 className="card-title prose lg:prose-xl sm:block hidden">C++</h2>
            <p className="lg:flex items-center prose sm:block hidden">
              C++ for embedded systems.
            </p>
            <div className="card-actions lg:justify-end justify-center pb-6 ml-auto w-20">
              <img
                src={cpp}
                alt="c plus plus icon"
                className="lg:w-14 w-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
