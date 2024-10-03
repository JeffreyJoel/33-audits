"use client";
import Image from "next/image";
import dein from "@/assets/brand_images/Dein.png";
import juiceBox from "@/assets/brand_images/juice-logo-full_white.b786ee4b.svg";
import inverter from "@/assets/brand_images/inverter_text_logo_light.svg";
import prophetBots from "@/assets/brand_images/prophetbots_logo.svg";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <section className="w-full max-w-6xl mx-auto mt-20 md:mt-40 flex flex-col items-center md:gap-[42px] gap-[24px]">
    <h2 className="font-semibold text-base md:text-xl text-gray-400 tracking-wide text-center mb-2 relative z-40 px-8 md:px-0">Unmatched expertise in Web3 security and development</h2>

      <div className="w-full relative h-[65px] before:absolute before:left-0 before:top-0 md:before:w-[166px] before:w-[83px] before:h-full before:bg-gradient-to-r before:from-milkyBg before:via-milkyBg/50 before:to-milkyBg/10 before:z-10 after:absolute after:right-0 after:top-0 md:after:w-[166px] after:w-[83px] after:h-full after:bg-gradient-to-l after:from-milkyBg after:via-milkyBg/50 after:to-milkyBg/10 after:z-10">
        <Marquee className="h-full" pauseOnHover={true}>
          <section className="flex items-center gap-28 md:gap-44">
            <div className=" h-full w-[150px]">
              <Image
                src={dein}
                className="w-full ml-8"
                alt="brand1"
                width={400}
                height={170}
                quality={100}
              />
            </div>
            <div className=" h-full w-[150px]">
              <Image
                src={juiceBox}
                className="w-full"
                alt="brand2"
                width={156}
                height={56}
                quality={100}
              />
            </div>
            <div className="h-full w-[120px]">
              <Image
                src={inverter}
                className="w-full"
                alt="brand3"
                width={463}
                height={168}
                quality={100}
              />
            </div>
            <div className=" h-full w-[150px]">
              <Image
                src={prophetBots}
                className="w-full"
                alt="brand4"
                width={397}
                height={168}
                quality={100}
              />
            </div>
          </section>
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
