"use client"
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testemonials from "@/components/Testemonials";
import { useRef } from "react";


export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center ">

    <div className="flex flex-col min-h-screen w-full justify-center">
      <Navbar
      scrollFunction={scrollToSection}
      refs={{
        about: aboutRef,
        program: programsRef,
        testemonial: testimonialsRef,
        contact:contactRef
      }}
      />
      <Hero contactRef={contactRef} scrollFunction={scrollToSection}/>
    </div>

    <Gallery refs={{aboutRef,contactRef}} scrollFunction={scrollToSection}/>
    <Feature featureRef={programsRef}/>
    <Testemonials testemonialRef={testimonialsRef}/>
    <Footer footerRef={contactRef}/>
    </div>
  );
}
