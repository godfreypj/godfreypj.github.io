export default function ThreadsCard({ url }: { url: string }) {
  const embedUrl = `${url}embed`;
  return (
    <iframe
      title="threads frame"
      src={embedUrl}
      className="w-full h-96 lg:pt-16"
      data-testid="threads-frame"
    />
  );
}
