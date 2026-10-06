import { Hero } from "@/components/landing/Hero/Hero";
import { CollageCarousel } from "@/components/landing/CollageCarousel/CollageCarousel";
import { Interlude } from "@/components/landing/Interlude/Interlude";
import { AboutMe } from "@/components/landing/AboutMe/AboutMe";

export default function Home() {
  return (
    <main>
      <Hero />
      <CollageCarousel />
      <Interlude />
      <AboutMe />
    </main>
  );
}
