import ContentHeaderIcon from "@/components/atoms/contentHeaderIcon";
import ImgComponent from "@/components/atoms/imgComponent";
import ReactIcon from "@/components/atoms/reactIcon";
import { desktopProps } from "@/types/layoutT";
import { eachMenuT } from "@/types/menuT";
import { pressStart } from "@/utils/fonts";
import Link from "next/link";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

export default function ContentHeader({
  target,
  isMax,
  setIsMax,
}: { target: eachMenuT } & desktopProps) {
  return (
    <div className="shrink-0 w-full h-7 bg-blue-900 flex justify-between items-center px-1">
      <div
        className={`flex gap-2 text-white text-[9px] ${pressStart.className} items-center`}
      >
        <ImgComponent
          src={target.imgPath as string}
          alt="content_header_icon"
          height={18}
          width={18}
        />
        {target.name}
      </div>
      <div className="flex gap-1">
        <ContentHeaderIcon onClick={() => setIsMax((prev) => !prev)}>
          <ReactIcon
            icon={isMax ? FaRegWindowRestore : FaRegWindowMaximize}
            size={12}
          />
        </ContentHeaderIcon>
        <Link href="/">
          <ContentHeaderIcon>
            <ReactIcon icon={IoCloseSharp} size={12} />
          </ContentHeaderIcon>
        </Link>
      </div>
    </div>
  );
}
