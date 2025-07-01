import { ROUTES } from "@/constants/path";
import { usePathname } from "next/navigation";

export default function FooterOpend() {
  const data = usePathname();
  return (
    <div
      className={`h-full px-0.5 overflow-hidden border-[3px] border-gray-300 border-t-gray-600 border-l-gray-600 flex items-center justify-center ${
        data === ROUTES.HOME ? "scale-0" : "scale-100"
      } transition-[scale] dura`}
    >
      <div className="px-1.5">teasdasdsdasdasdasdst</div>
    </div>
  );
}
