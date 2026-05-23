import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Work from "@/components/Work";
import Process from "@/components/Process";
import People from "@/components/People";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow">
        <Hero />
        <Capabilities />
        <Work />
        <Process />
        <People />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
