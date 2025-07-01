import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "../components/template/mainLayout";
import { notoSans } from "@/utils/fonts";

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
      <body className={`${notoSans.className} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
