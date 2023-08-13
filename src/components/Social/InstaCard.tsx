import './SocialStyles.css';

export default function InstaCard({ url }: { url: string }) {
  const embedUrl = `${url}embed`;
  return (
    <div className="bg-base-100 shadow-xl w-full insta-frame">
      <iframe
        title="instagram frame"
        src={embedUrl}
        className="h-full w-full"
      />
    </div>
  );
}
