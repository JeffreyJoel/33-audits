import { Button } from "./ui/button";
import { ArrowRight, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Audits } from "./Audits";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto mt-12 md:mt-20 pt-8 text-center" id="home">

        <div>
          <h1 className="pt-4 text-center text-5xl md:text-6xl font-bold tracking-tighter mx-auto">
            33 Audits
          </h1>
          {/* <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-blue-400 via-cyan-500 to-blue-600 [text-shadow:0_0_rgba(0,0,0,0.1)]">
        <span className="text-4xl font-bold">Exploding beams.</span>
      </div> */}
          <div>
            <p className="mt-6 text-xl sm:text-2xl md:text-4xl">
              Securing Protocols, one Audit at a time
            </p>
            <div className="mt-16 flex flex-col md:flex-row gap-8 mx-auto w-fit">
              <Link
                href="https://github.com/leeftk/leeftk/blob/main/README.md"
                target="blank"
              >
                <Button className="rounded-xl text-lg p-6 cursor-pointer">
                  <i className="bi bi-github mr-4 text-lg"></i> Github
                </Button>
              </Link>
              <Link
                href="https://app.deform.cc/form/6d07745a-8a46-4445-b064-4755c72e8c4b/?page_number=0"
                target="blank"
              >
                <Button
                  className="rounded-xl text-lg p-6 cursor-pointer hover:text-white hover:bg-blue-700"
                  variant={"secondary"}
                >
                  Book an Audit <ArrowRight className="ml-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-center w-fit mx-auto mt-16 gap-8">
        <Card className="w-[350px] bg-neutral-900/70 text-white border-gray-800 p-5 pb-3 rounded-xl">
          <CardContent className="">
            <h3 className="text-6xl mb-2 font-medium">50K+</h3>
            <p className="text-gray-300 text-lg">Lines of code audited</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] bg-neutral-900/70 text-white border-gray-800 p-5 pb-0 rounded-xl">
          <CardContent className="">
            <h3 className="text-6xl mb-2 font-medium">50K+</h3>
            <p className="text-gray-300 text-lg">Lines of code audited</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] bg-neutral-900/70 text-white border-gray-800 p-5 pb-0 rounded-xl">
          <CardContent className="">
            <h3 className="text-6xl mb-2 font-medium">50K+</h3>
            <p className="text-gray-300 text-lg">Lines of code audited</p>
          </CardContent>
        </Card>
      </div> */}

    </div>
  );
}
