import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Signatures from "@/components/Signatures";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Signatures />
      <Gallery />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}
