import { MENU_LIST } from "@/constants/path";
import { desktopProps } from "@/types/layoutT";
import DesktopEachMenu from "../molecules/desktopEachMenu";

export default function DesktopMenus({ isMax }: desktopProps) {
  return (
    <div
      className={`select-none shrink-0 ${
        isMax ? "w-0" : "xl:w-32 2xl:w-40"
      } flex flex-col gap-5 pt-2 text-white text-[14px]`}
    >
      {(Object.keys(MENU_LIST) as Array<keyof typeof MENU_LIST>).map((menu) => (
        <DesktopEachMenu key={menu} menu={MENU_LIST[menu]} />
      ))}
    </div>
  );
}
