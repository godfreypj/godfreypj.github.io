export default function InstaCard({ url }: { url: string }) {
  const embedUrl = `${url}embed`;
  return (
    <iframe
      title="instagram frame"
      src={embedUrl}
      className="w-full h-96"
      data-testid="insta-frame"
    />
  );
}
