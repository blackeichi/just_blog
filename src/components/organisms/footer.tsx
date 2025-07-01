"use client";

import { GLOBAL_COLOR } from "@/constants/color";
import FooterButton from "../molecules/footer/footerButton";
import FooterPartition from "../atoms/footerPartition";
import FooterOpend from "../molecules/footer/footerOpend";
import FooterDates from "../molecules/footer/footerDates";
import { useState } from "react";
import FooterMenus from "../molecules/footer/footerMenus";

export default function Footer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="unDraggable w-full h-[35px] box-content py-0.5 px-1 border-t-[3px] border-t-gray-300 flex items-center justify-between text-[11px] relative"
      style={{ backgroundColor: GLOBAL_COLOR.gray }}
    >
      <div className="flex h-full box-content items-center gap-[3px]">
        <FooterButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <FooterPartition />
        <FooterOpend />
      </div>
      <div className="flex h-full box-content items-center gap-[3px]">
        <FooterPartition />
        <FooterDates />
      </div>
      {isOpen && <FooterMenus setIsOpen={setIsOpen} />}
    </div>
  );
}
