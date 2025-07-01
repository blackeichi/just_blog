"use client";

import { GLOBAL_COLOR } from "@/constants/color";
import { useState } from "react";
import Footer from "../organisms/footer";
import BodyLayout from "./bodyLayout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`w-screen h-screen flex flex-col overflow-hidden`}
      style={{
        backgroundColor: GLOBAL_COLOR.bgGreen,
      }}
    >
      <BodyLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </BodyLayout>
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
