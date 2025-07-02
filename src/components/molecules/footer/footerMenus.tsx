import ImgComponent from "@/components/atoms/imgComponent";
import { GLOBAL_COLOR } from "@/constants/color";
import { MENU_LIST } from "@/constants/path";
import { footerProps } from "@/types/layoutT";

export default function FooterMenus({ isOpen, setIsOpen }: footerProps) {
  return (
    <>
      {isOpen && (
        <div
          className="absolute left-2 bottom-9 p-3 border-[3px] border-t-gray-300 border-l-gray-300 border-r-gray-600 border-b-gray-600 text-[13px] flex flex-col gap-8 outline-0"
          style={{
            backgroundColor: GLOBAL_COLOR.gray,
          }}
        >
          {(Object.keys(MENU_LIST) as Array<keyof typeof MENU_LIST>).map(
            (menu) => (
              <div
                key={menu}
                className="flex items-center gap-5 hover:bg-blue-900 hover:text-white p-4"
              >
                <ImgComponent
                  src={MENU_LIST[menu].imgPath as string}
                  alt={`${menu} icon`}
                  width={25}
                  height={25}
                />
                <span className="pr-20">{MENU_LIST[menu].name}</span>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}
