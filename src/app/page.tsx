import { Audits } from "@/components/Audits";
import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Reviews";
import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/navbar";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <>
    <div className="absolute mx-auto left-0 right-0">
    <NavBar />
      <div>
        <Hero />
        <Brands/>
        <Audits />
        <Testimonial/>
        <Footer/>
      </div>
    </div>
    </>
  );
}
