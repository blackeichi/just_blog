import { getFormattedDate } from "@/utils/time";
import { useEffect, useState } from "react";
import ImgComponent from "../../atoms/imgComponent";

export default function FooterDates() {
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 10000);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      className={`h-full flex items-center justify-center gap-2.5 border-2 border-gray-600 border-b-gray-300 border-r-gray-300 px-1.5`}
    >
      <div className="flex gap-1 items-center">
        <ImgComponent
          width={15}
          height={15}
          alt="calendar"
          src="/images/calendar.png"
        />
        <ImgComponent
          width={15}
          height={15}
          alt="clock"
          src="/images/clock.png"
        />
      </div>
      {getFormattedDate(time)}
    </div>
  );
}
