import Selfie from './subcomponents/Selfie';
import Timeline from './subcomponents/Timeline';
import ExpCard from './subcomponents/ExpCard';
import python from '../../assets/python.png';
import html5 from '../../assets/html5.png';
import java from '../../assets/java.png';
import cpp from '../../assets/cpp.png';

export default function About() {
  return (
    <>
      <Selfie />
      <div className="flex justify-center">
        <Timeline />
      </div>
      <div
        data-testid="about-skills"
        className="flex justify-center"
        role="region"
      >
        <ExpCard
          title="Web Dev"
          description="React applications & java/spring."
          icon={html5}
        />
        <ExpCard
          title="Java/Spring"
          description="WebApps & SOAP and REST APIs."
          icon={java}
        />
        <ExpCard
          title="Python"
          description="Back-end Flask apps; MFE architecture."
          icon={python}
        />
        <ExpCard
          title="C++"
          description="C++ for embedded systems."
          icon={cpp}
        />
      </div>
    </>
  );
}
