"use client";
import Image from "next/image";
import dein from "@/assets/brand_images/Dein.svg";
import juiceBox from "@/assets/brand_images/juice-logo-full_white.b786ee4b.svg";
import inverter from "@/assets/brand_images/inverter_text_logo_light.svg";
import prophetBots from "@/assets/brand_images/prophetbots_logo.svg";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <section className="w-full mx-auto mt-20 md:mt-52 mb-20 flex flex-col items-center md:gap-[40px] gap-[24px]">
    {/* <h2 className="font-semibold text-base text-gray-300 md:text-2xl  tracking-wide text-center mb-0 pb-0 relative z-40 px-8 md:px-0">Unmatched expertise in Web3 security and development</h2> */}

      <div className="w-full md:max-w-7xl relative h-[70px] before:absolute before:left-0 before:top-0 md:before:w-[166px] before:w-[83px] before:h-full bg-transparent before:bg-gradient-to-r before:from-foreground before:via-foreground/50 before:to-foreground/10 before:z-10 after:absolute after:right-0 after:top-0 md:after:w-[166px] after:w-[83px] after:h-full after:bg-gradient-to-l after:from-foreground after:via-foreground/50 after:to-foreground/10 after:z-10">
        <Marquee className="h-full" pauseOnHover={true}>
          <section className="flex items-center gap-28 md:gap-44">
            <div className=" h-full w-[150px]">
              <Image
                src={dein}
                className="h-full w-[150px] ml-8"
                alt="brand1"
                width={200}
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
            <div className="h-full w-[150px]">
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
