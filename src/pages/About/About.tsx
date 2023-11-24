import Selfie from './subcomponents/Selfie';
import Timeline from './subcomponents/Timeline';
import python from '../../assets/python.png';
import html5 from '../../assets/html5.png';
import java from '../../assets/java.png';
import cpp from '../../assets/cpp.png';

export default function About() {
  return (
    <>
      <Selfie />
      <Timeline />
      <div
        data-testid="about-skills"
        className="flex justify-center"
        role="region"
      >
        <div className="card lg:w-96 lg:h-full sm:w-20 bg-primary text-primary-content m-2 h-20 w-20 items-center">
          <div className="card-body p-6">
            <h2 className="card-title prose lg:prose-xl sm:block hidden">Web Dev</h2>
            <p className="lg:flex items-center prose sm:block hidden">
              React applications & java/spring.
            </p>
            <div className="card-actions lg:justify-end justify-center pb-6 ml-auto w-20">
              <img
                src={html5}
                alt="html5 icon"
                className="lg:w-14 w-10"
              />
            </div>
          </div>
        </div>
        <div className="card lg:w-96 lg:h-full sm:w-20 bg-primary text-primary-content m-2 h-20 w-20 items-center">
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
        <div className="card lg:w-96 lg:h-full sm:w-20 bg-primary text-primary-content m-2 h-20 w-20 items-center">
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
        <div className="card lg:w-96 lg:h-full sm:w-20 bg-primary text-primary-content m-2 h-20 w-20 items-center">
          <div className="card-body p-6">
            <h2 className="card-title prose lg:prose-xl sm:block hidden">C++</h2>
            <p className="lg:flex items-center prose sm:block hidden">C++ for embedded systems.</p>
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
