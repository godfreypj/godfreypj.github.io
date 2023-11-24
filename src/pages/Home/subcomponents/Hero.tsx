import '../Home.css';
import cityImage from '../../../assets/city.jpg';

export default function Hero() {
  return (
    <div
      className="hero lg:h-72 rounded-xl"
      style={{
        backgroundImage: `url(${cityImage})`,
      }}
      data-testid="hero-banner"
      role="img"
      aria-label="cityscape background image"
    >
      <div
        className="hero-overlay bg-opacity-60 rounded-xl"
        data-testid="hero-overlay"
      />
      <div className="hero-content text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 prose text-5xl font-bold">Welcome</h1>
          <p className="mb-1 prose sm:prose-xl text-neutral-50">
            This is a spot for some info about me & my projects.
          </p>
          <p className="mb-0 prose sm:prose-xl text-neutral-50">Enjoy.</p>
        </div>
      </div>
    </div>
  );
}
