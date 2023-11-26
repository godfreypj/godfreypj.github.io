import InstaCard from 'components/Social/InstaCard';
import ThreadsCard from 'components/Social/ThreadsCard';
import urls from 'assets/links/socialLinks.json';

export default function Social() {
  const instaLink = urls.Instagram[Math.floor(Math.random() * urls.Instagram.length)];
  const threadsLink = urls.Threads[Math.floor(Math.random() * urls.Threads.length)];
  return (
    <div
      className="shadow-xl rounded flex flex-col lg:flex-row h-full"
      data-testid="social-container"
    >
      <div className="p-3 lg:w-1/3">
        <h1 className="prose lg:prose-2xl text-center sm:text-left">Instagram</h1>
        <InstaCard url={instaLink} />
      </div>
      <div className="lg:p-4 lg:w-2/3">
        <h1 className="prose lg:prose-2xl text-center sm:text-left">Threads</h1>
        <ThreadsCard url={threadsLink} />
      </div>
    </div>
  );
}
