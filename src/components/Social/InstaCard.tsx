export default function InstaCard({ url }: { url: string }) {
  const embedUrl = `${url}embed`;
  return (
    <iframe
      title="instagram frame"
      src={embedUrl}
      className="w-full lg:h-96 h-80 lg:pb-4 items-center"
      data-testid="insta-frame"
    />
  );
}
