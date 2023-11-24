import selfie from '../../../assets/selfie.jpg';

export default function Selfie() {
  return (
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
  );
}
