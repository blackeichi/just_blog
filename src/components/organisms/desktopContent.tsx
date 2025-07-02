import { GLOBAL_COLOR } from "@/constants/color";
import { MENU_BY_ROUTE, MENU_LIST, ROUTES } from "@/constants/path";
import { usePathname } from "next/navigation";
import ContentHeader from "../molecules/content/contentHeader";
import { desktopProps } from "@/types/layoutT";

export default function DesktopContent({
  isMax,
  setIsMax,
  children,
}: {
  children: React.ReactNode;
} & desktopProps) {
  const path = usePathname();
  return (
    <>
      {path === ROUTES.HOME ? (
        <>{children}</>
      ) : (
        <div
          className={`border-[3px] border-l-gray-300 border-t-gray-300 border-r-gray-600 border-b-gray-600 p-0.5 w-full h-full transition-[scale]] ${
            isMax ? "scale-100" : "scale-95"
          }`}
          style={{
            backgroundColor: GLOBAL_COLOR.gray,
          }}
        >
          <ContentHeader
            target={
              MENU_LIST[MENU_BY_ROUTE[path as keyof typeof MENU_BY_ROUTE]]
            }
            isMax={isMax}
            setIsMax={setIsMax}
          />
          {children}
        </div>
      )}
    </>
  );
}
