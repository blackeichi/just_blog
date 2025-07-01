import { bodyLayoutProps } from "@/types/layoutT";

export default function BodyLayout({
  isOpen,
  setIsOpen,
  children,
}: bodyLayoutProps) {
  return <div className="h-full">{children}</div>;
}
