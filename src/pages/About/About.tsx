import selfie from '../../assets/selfie.jpg';
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
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Language 1</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                type="button"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Language 2</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                type="button"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Language 3</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                type="button"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Language 4</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                type="button"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Language 5</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                type="button"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
