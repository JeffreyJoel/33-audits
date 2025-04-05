import { Audits } from "@/components/Audits";
import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Reviews";
import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/navbar";
import { ScrollAnimate } from "@/components/ui/scroll-animation";

export default function Home() {
  return (
    <>
      <div className="absolute mx-auto left-0 right-0">
        <NavBar />
        <div>
          <Hero />
          <Brands />
          <ScrollAnimate id="audits" delay={0.3}>
            <Audits />
          </ScrollAnimate>

          {/* <Testimonial/> */}
          <Footer />
        </div>
      </div>
    </>
  );
}
