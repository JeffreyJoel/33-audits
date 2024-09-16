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
    <div className="max-w-7xl mx-auto mt-20 pt-8 text-center" id="home">
      <h1 className="pt-4 text-center text-6xl font-bold tracking-tighter mx-auto">
        33 Audits
      </h1>
      <div>
        <p className="mt-6 text-3xl">Securing Protocols, one Audit at a time</p>
        <div className="mt-16 flex gap-8 mx-auto w-fit">
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
              className="rounded-xl text-lg p-6 cursor-pointer"
              variant={"secondary"}
            >
              Book an Audit <ArrowRight className="ml-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-fit mx-auto mt-16 gap-8">
        <Card className="w-[350px] bg-[#27272A] text-white border-gray-700 p-5 pb-3 rounded-xl">
          <CardContent className="">
            <h3 className="text-6xl mb-2 font-medium">50K+</h3>
            <p className="text-gray-300 text-lg">Lines of code audited</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] bg-[#27272A] text-white border-gray-700 p-5 pb-0 rounded-xl">
          <CardContent className="">
            <h3 className="text-6xl mb-2 font-medium">50K+</h3>
            <p className="text-gray-300 text-lg">Lines of code audited</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] bg-[#27272A] text-white border-gray-700 p-5 pb-0 rounded-xl">
          <CardContent className="">
            <h3 className="text-6xl mb-2 font-medium">50K+</h3>
            <p className="text-gray-300 text-lg">Lines of code audited</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
