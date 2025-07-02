import { eachMenuT } from "@/types/menuT";
import ImgComponent from "../atoms/imgComponent";
import { useState } from "react";

export default function DesktopEachMenu({ menu }: { menu: eachMenuT }) {
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
