import { Audits } from "@/components/Audits";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Reviews";
import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/navbar";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <>
      {/* <div className="w-full absolute inset-0 h-full"> */}
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full fixed inset-0"
          particleColor="#FFFFFF"
        />
      {/* </div> */}
    <div className="absolute mx-auto left-0 right-0">
    <NavBar />
      <div>
        <Hero />
        <Audits />
        <Testimonial/>
        <Footer/>
      </div>
    </div>
    </>
  );
}
