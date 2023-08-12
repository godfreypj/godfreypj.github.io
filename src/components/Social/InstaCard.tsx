import './InstaCard.css';

export default function InstaCard({ url }: { url: string }) {
  const embedUrl = `${url}embed`;
  return (
    <div className="bg-base-100 shadow-xl w-max m-7 p-6">
      <iframe
        title="instagram frame"
        src={embedUrl}
        height="460"
      />
    </div>
  );
}
