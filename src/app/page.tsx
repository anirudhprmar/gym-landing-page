import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testemonials from "@/components/Testemonials";


export default async  function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center ">

    <div className="flex flex-col min-h-screen w-full justify-center">
      <Navbar/>
      <Hero/>
    </div>

    <Gallery/>
    <Feature/>
    <Testemonials/>
    <Footer/>
    </div>
  );
}
