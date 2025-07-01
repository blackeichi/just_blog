import { bodyLayoutProps } from "@/types/layoutT";
import MenuList from "../organisms/menuList";

export default function BodyLayout({
  isOpen,
  setIsOpen,
  children,
}: bodyLayoutProps) {
  return (
    <div className="h-full flex">
      <MenuList isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
    </div>
  );
}
