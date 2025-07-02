import { MENU_LIST } from "@/constants/path";
import MainMenu from "../molecules/mainMenu";
import { desktopProps } from "@/types/layoutT";

export default function DesktopMenus({ isMax }: desktopProps) {
  return (
    <div className={`shrink-0 ${isMax ? "w-0" : "w-32"}`}>
      {(Object.keys(MENU_LIST) as Array<keyof typeof MENU_LIST>).map((menu) => (
        <MainMenu key={menu} menu={MENU_LIST[menu]} />
      ))}
    </div>
  );
}
