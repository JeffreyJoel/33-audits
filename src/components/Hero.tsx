import { Button } from "./ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto mt-12 md:mt-24 pt-8 text-center" id="home">
      <div className="relative px-8 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-18 relative text-center max-w-6xl mx-auto !leading-snug __className_399708">
          Smart Contract Auditing
          <br />
          with{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-blue-500 to-blue-600/[0.8] z-10">
            {" "}
            Unmatched Expertise & &amp; Reliability
          </span>
        </h1>
        <div>
          {/* <p className="mt-6 text-xl sm:text-2xl md:text-4xl">
              Securing Protocols, one Audit at a time
            </p> */}
          <h2 className="relative font-medium text-base md:text-xl text-foreground tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased">
            We’ve got your back when it comes to protecting your protocol and
            securing your data. Clear processes, real results, and a commitment
            to top-notch delivery every step of the way.
            <br />
          </h2>

          <div className="mt-16 flex flex-col md:flex-row gap-8 mx-auto w-fit">
            <Link
              href="https://github.com/leeftk/leeftk/blob/main/README.md"
              target="blank"
            >
              <Button className="rounded-xl text-lg p-6 cursor-pointer">
                <i className="bi bi-github mr-4 text-base md:text-lg"></i>{" "}
                Github
              </Button>
            </Link>
            <Link
              href="https://app.deform.cc/form/6d07745a-8a46-4445-b064-4755c72e8c4b/?page_number=0"
              target="blank"
            >
              <Button
                className="rounded-xl text-base md:text-lg p-6 cursor-pointer  bg-blue-700 text-white border border-blue-700  hover:bg-blue-500"
                variant={"secondary"}
              >
                Book an Audit <ArrowRight className="ml-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
