import './SocialStyles.css';

export default function InstaCard({ url }: { url: string }) {
  const embedUrl = `${url}embed`;
  return (
    <div className="bg-base-100 shadow-xl w-full insta-frame">
      <iframe
        title="instagram frame"
        src={embedUrl}
        className="w-full insta-frame"
        data-testid="insta-frame"
      />
    </div>
  );
}
