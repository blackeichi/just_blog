import { EachMenu } from "@/types/menuT";
import ImgComponent from "../atoms/imgComponent";
import { useState } from "react";
import { GLOBAL_COLOR } from "@/constants/color";
import Link from "next/link";

export default function DesktopEachMenu({ menu }: { menu: EachMenu }) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <div
      className={`relative flex flex-col items-center justify-center w-20 h-20 gap-2 cursor-pointer`}
      onClick={() => setIsSelected(true)}
      tabIndex={-1}
      onBlur={() => {
        setIsSelected(false);
      }}
    >
      {/* sub menus */}
      {isSelected && (
        <div
          className="absolute z-30 text-black left-10 top-10 p-1.5 whitespace-nowrap border-[3px] border-t-gray-300 border-l-gray-300 border-r-gray-600 border-b-gray-600 text-[13px] flex flex-col gap-8 outline-0"
          style={{
            backgroundColor: GLOBAL_COLOR.gray,
          }}
          onMouseDown={(event) => {
            event.preventDefault();
          }}
        >
          {menu?.subMenus &&
            Object.values(menu.subMenus).map((sub) => (
              <Link
                key={sub.path}
                href={sub.path}
                className="flex gap-5 hover:bg-blue-900 hover:text-white p-2 py-1"
              >
                {sub.name}
              </Link>
            ))}
        </div>
      )}
      {/* icon */}
      <div className="w-fit h-fit relative">
        <ImgComponent
          src={menu.imgPath as string}
          alt={`${menu.name} homeIcon`}
          width={35}
          height={35}
        />
        <div
          className={`w-12 h-12 absolute -left-[6.5px] -top-[6.5px] z-10 rounded-[2px] ${
            isSelected ? "bg-[rgba(0,0,0,0.3)]" : ""
          }`}
        />
      </div>
      {/* name */}
      <div className="w-fit h-fit relative px-1">
        <span className="z-10 relative">{menu.name}</span>
        <div
          className={`w-full h-full absolute -left-0 -top-0 rounded-[2px] ${
            isSelected
              ? "bg-[rgba(0,0,0,0.3)] border-2 border-dotted border-gray-200"
              : ""
          }`}
        />
      </div>
    </div>
  );
}
