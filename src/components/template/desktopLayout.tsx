"use client";

import { useState } from "react";
import DesktopContent from "../organisms/desktopContent";
import DesktopMenus from "../organisms/desktopMenus";

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMax, setIsMax] = useState(false);
  return (
    <div className="h-full flex items-center justify-center">
      <DesktopMenus isMax={isMax} setIsMax={setIsMax} />
      <DesktopContent isMax={isMax} setIsMax={setIsMax}>
        {children}
      </DesktopContent>
    </div>
  );
}
