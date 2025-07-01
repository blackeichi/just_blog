import { pressStart } from "@/utils/fonts";
import ImgComponent from "../../atoms/imgComponent";
import { footerProps } from "@/types/layoutT";

export default function FooterButton({ isOpen, setIsOpen }: footerProps) {
  return (
    <div
      className={` h-full px-0.5 overflow-hidden border-2 border-gray-600 border-t-gray-300 border-l-gray-300 flex items-center justify-center`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className={`flex w-[80px] h-full items-center gap-2 justify-center cursor-default  ${
          pressStart.className
        } ${
          isOpen
            ? "border-dotted border-1 border-gray-800 text-[8px]"
            : "text-[9px]"
        }`}
      >
        <ImgComponent
          alt="window icon"
          src="/images/windowIcon.png"
          width={isOpen ? 20 : 23}
          height={isOpen ? 20 : 23}
        />
        <span>Menu</span>
      </div>
    </div>
  );
}
