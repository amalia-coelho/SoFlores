import { Splash } from "@/components/layout/Splash/Splash";
import { Background } from "@/components/layout/Background/Background";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Splash />
      <Background />
      <Header />
      {children}
      <Footer />
    </>
  );
}
