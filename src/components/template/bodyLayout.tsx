export default function BodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full flex">{children}</div>;
}
