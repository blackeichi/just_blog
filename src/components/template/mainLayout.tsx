import { GLOBAL_COLOR } from "@/constants/color";
import Footer from "../organisms/footer";
import BodyLayout from "./bodyLayout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-screen h-screen flex flex-col overflow-hidden`}
      style={{
        backgroundColor: GLOBAL_COLOR.bgGreen,
      }}
    >
      <BodyLayout>{children}</BodyLayout>
      <Footer />
    </div>
  );
}
