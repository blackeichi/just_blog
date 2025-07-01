import ImgComponent from "@/components/atoms/imgComponent";
import { GLOBAL_COLOR } from "@/constants/color";
import { FOOTER_MENU_BAR } from "@/constants/footer";
import { MENU_LIST } from "@/constants/path";
import { footerProps } from "@/types/layoutT";
import { useEffect } from "react";

export default function FooterMenus({ setIsOpen }: footerProps) {
  useEffect(() => {
    const target = document.getElementById(FOOTER_MENU_BAR);
    if (target) {
      target.focus();
    }
  }, []);
  return (
    <div
      id={FOOTER_MENU_BAR}
      className="absolute left-2 bottom-9 p-6 border-[3px] border-t-gray-300 border-l-gray-300 border-r-gray-600 border-b-gray-600 text-[13px] flex flex-col gap-10"
      style={{
        backgroundColor: GLOBAL_COLOR.gray,
      }}
      tabIndex={-1}
      onBlur={() => {
        setIsOpen(false);
      }}
    >
      {(Object.keys(MENU_LIST) as Array<keyof typeof MENU_LIST>).map((menu) => (
        <div key={menu} className="flex items-center gap-5">
          <ImgComponent
            src={MENU_LIST[menu].imgPath as string}
            alt={`${menu} icon`}
            width={25}
            height={25}
          />
          <span className="pr-20">{MENU_LIST[menu].name}</span>
        </div>
      ))}
    </div>
  );
}
