import './SocialStyles.css';

export default function ThreadsCard({ url }: { url: string }) {
  const embedUrl = `${url}embed`;
  return (
    <div className="bg-base-100 shadow-xl flex w-full threads-frame">
      <iframe
        title="threads frame"
        src={embedUrl}
        className="w-full h-full"
      />
    </div>
  );
}
