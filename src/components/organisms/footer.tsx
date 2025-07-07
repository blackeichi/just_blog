"use client";

import { GLOBAL_COLOR } from "@/constants/color";
import FooterButton from "../molecules/footer/footerButton";
import FooterPartition from "../atoms/footerPartition";
import FooterOpend from "../molecules/footer/footerOpend";
import FooterDates from "../molecules/footer/footerDates";
import { useEffect, useState } from "react";
import FooterMenus from "../molecules/footer/footerMenus";

const FOOTER_ELEMENT = "windows_footer";

export default function Footer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isOpen) {
      const target = document.getElementById(FOOTER_ELEMENT);
      if (target) {
        target.focus();
      }
    }
  }, [isOpen]);
  return (
    <div
      id={FOOTER_ELEMENT}
      className="select-none z-50 w-full h-[35px] box-content py-0.5 px-1 border-t-[3px] border-t-gray-300 flex items-center justify-between text-[11px] relative"
      style={{ backgroundColor: GLOBAL_COLOR.gray }}
      tabIndex={-1}
      onBlur={() => {
        setIsOpen(false);
      }}
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
      <FooterMenus isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
