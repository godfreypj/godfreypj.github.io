import selfie from '../../assets/selfie.jpg';
import python from '../../assets/python.png';
import html5 from '../../assets/html5.png';
import java from '../../assets/java.png';
import cpp from '../../assets/cpp.png';
import './About.css';

export default function About() {
  return (
    <>
      <div
        className="flex flex-row lg:h-16 rounded bg-gradient-to-l
                 from-accent to-neutral-focus hover:bg-gradient-to-r"
        data-testid="about-title-bar"
      >
        <article
          className="prose flex-grow font-bold lg:text-base lg:pt-4 lg:pl-20 p-0 m-0 text-xs"
          data-testid="about-quote"
        >
          Software Engineer, New England native & Navy veteran.
        </article>
        <div
          className="avatar flex-none self-center lg:ml-24 p-0 m-0"
          data-testid="avatar"
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
        data-testid="about-skills"
        className="flex mt-10"
      >
        <div className="card w-96 bg-primary text-primary-content m-8">
          <div className="card-body p-6">
            <h2 className="card-title prose prose-xl">Python</h2>
            <p className="flex items-center prose prose-md">
              Back-end Flask apps; MFE architecture.
            </p>
            <div className="card-actions justify-end ml-auto w-20">
              <img
                src={python}
                alt="python icon"
                className="w-14"
              />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content m-8">
          <div className="card-body p-6">
            <h2 className="card-title prose prose-xl">Web Dev</h2>
            <p className="flex items-center prose prose-md">
              React applications & java/spring back-ends.
            </p>
            <div className="card-actions justify-end ml-auto w-20">
              <img
                src={html5}
                alt="html5 icon"
                className="w-14"
              />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content m-8">
          <div className="card-body p-6">
            <h2 className="card-title prose prose-xl">Java/Spring</h2>
            <p className="flex items-center prose prose-md">
              WebApps and back-end SOAP and REST APIs.
            </p>
            <div className="card-actions justify-end ml-auto w-20">
              <img
                src={java}
                alt="java icon"
                className="w-14"
              />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content m-8">
          <div className="card-body p-6">
            <h2 className="card-title prose prose-xl">C++</h2>
            <p className="flex items-center prose prose-md">
              Developed and implemented C++ for embedded systems.
            </p>
            <div className="card-actions justify-end ml-auto w-20">
              <img
                src={cpp}
                alt="c plus plus icon"
                className="w-14"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
