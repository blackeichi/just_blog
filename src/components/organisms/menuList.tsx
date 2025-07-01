import { MENU_LIST } from "@/constants/path";
import { footerProps } from "@/types/layoutT";
import MainMenu from "../molecules/mainMenu";
import { GLOBAL_COLOR } from "@/constants/color";

export default function MenuList({ isOpen, setIsOpen }: footerProps) {
  return (
    <div
      className={`w-40 border-[3px] border-gray-300 border-b-gray-600 border-r-gray-600`}
      style={{
        backgroundColor: GLOBAL_COLOR.gray,
      }}
    >
      {(Object.keys(MENU_LIST) as Array<keyof typeof MENU_LIST>).map((menu) => (
        <MainMenu key={menu} menu={MENU_LIST[menu]} />
      ))}
    </div>
  );
}
