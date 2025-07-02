import type { Metadata } from "next";
import "./globals.css";
import { notoSans } from "@/utils/fonts";
import { GLOBAL_COLOR } from "@/constants/color";
import Footer from "@/components/organisms/footer";
import DesktopLayout from "@/components/template/desktopLayout";

export const metadata: Metadata = {
  title: {
    template: "Hans | %s",
    default: "Hans",
  },
  description: "Hans Portfolio, 한정우 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased w-screen h-screen flex flex-col overflow-hidden`}
        style={{
          backgroundColor: GLOBAL_COLOR.bgGreen,
        }}
      >
        <DesktopLayout>{children}</DesktopLayout>
        <Footer />
      </body>
    </html>
  );
}
