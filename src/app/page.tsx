import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testemonials from "@/components/Testemonials";


export default async  function Home() {
  return (
    <>
    <Hero/>
    <Gallery/>
    <Feature/>
    <Testemonials/>
    <Footer/>
    </>
  );
}
