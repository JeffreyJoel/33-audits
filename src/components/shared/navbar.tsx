"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import profile from "../../assets/profile.jpg";
import { ArrowRight } from "lucide-react";
import { Link as ScrollLink, Element } from "react-scroll";
import {MobileNav} from "./mobile-nav";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className=" md:max-w-5xl mx-auto">
      <nav className="flex items-center justify-between p-4 mt-4 md:mt-8 text-white">
        <div className="flex justify-between items-center space-x-4 p-2 px-5 w-9/12 rounded-2xl">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src=""
                alt="User Avatar"
              />
              <AvatarFallback>
                <Image
                src={profile}
                alt="33 audits"
                />
              </AvatarFallback>
            </Avatar>
            <span className="font-semibold text-2xl">33 Audits</span>
          </div>
          <ScrollLink
            to={"home"}
            smooth={true}
            duration={500}
            className="hidden md:block hover:underline text-xl font-medium cursor-pointer hover:text-blue-400"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to={"audits"}
            smooth={true}
            duration={500}
            className="hidden md:block hover:underline text-xl font-medium cursor-pointer hover:text-blue-400"
          >
            Audits
          </ScrollLink>
          <ScrollLink
            to={"reviews"}
            smooth={true}
            duration={500}
            className="hidden md:block hover:underline text-xl font-medium cursor-pointer hover:text-blue-400"
          >
            Reviews
          </ScrollLink>
          <span></span>
        </div>
        <Link
          href="https://github.com/leeftk/leeftk/blob/main/README.md"
          target="blank"
          className="hidden md:block"
        >
          <Button className="bg-blue-700 rounded-xl text-lg p-6 hover:bg-blue-800 hover:text-white">
            Portfolio <ArrowRight className="ml-4" />
          </Button>
        </Link>
        <MobileNav/>
      </nav>
    </div>
  );
}
