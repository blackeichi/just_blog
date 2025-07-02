import { GLOBAL_COLOR } from "@/constants/color";

export default function ContentHeaderIcon({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="w-5 h-5 rounded-[1px] border-2 border-gray-600 border-l-gray-300 border-t-gray-300 flex justify-center items-center active:border-gray-800 active:border-r-gray-100 active:border-b-gray-100 active:border-[1px]"
      type="button"
      style={{
        backgroundColor: GLOBAL_COLOR.gray,
      }}
      onClick={onClick}
    >
      <button
        type="button"
        className="w-full h-full border-[1px] border-none active:border-dotted border-gray-600 flex justify-center items-center"
      >
        {children}
      </button>
    </button>
  );
}
