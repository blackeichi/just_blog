import { IconType } from "react-icons";

export default function ReactIcon({
  icon,
  size = 20,
  color,
}: {
  icon: IconType;
  size?: number;
  color?: string;
}) {
  return <>{icon({ size, color })}</>;
}
