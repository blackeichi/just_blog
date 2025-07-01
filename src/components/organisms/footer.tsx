import { GLOBAL_COLOR } from "@/constants/color";
import { layoutProps } from "@/types/layoutT";
import FooterButton from "../molecules/footerButton";
import FooterPartition from "../atoms/footerPartition";
import FooterOpend from "../molecules/footerOpend";
import FooterDates from "../molecules/footerDates";

export default function Footer({ isOpen, setIsOpen }: layoutProps) {
  return (
    <div
      className="unDraggable w-full h-[35px] box-content py-0.5 px-1 border-t-2 border-t-gray-300 flex items-center justify-between text-[11px]"
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
    </div>
  );
}
