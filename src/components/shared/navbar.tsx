"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import profile from "../../assets/profile.jpg";
import { ArrowRight } from "lucide-react";
import { Link as ScrollLink, Element } from "react-scroll";

export default function NavBar() {
  return (
    <div className="max-w-5xl mx-auto">
      <nav className="flex items-center justify-between p-4 mt-8 text-white">
        <div className="flex justify-between items-center space-x-4 p-2 px-5 md:bg-[#27272A] w-9/12 rounded-2xl">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1677046353451466752/JQtGE1MF_400x400.jpg"
                alt="User Avatar"
              />
              <AvatarFallback>TD</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-xl">33 Audits</span>
          </div>
          <ScrollLink
            to={"home"}
            smooth={true}
            duration={500}
            className="hidden md:block hover:underline text-lg cursor-pointer"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to={"audits"}
            smooth={true}
            duration={500}
            className="hidden md:block hover:underline text-lg cursor-pointer"
          >
            Audits
          </ScrollLink>
          <ScrollLink
            to={"reviews"}
            smooth={true}
            duration={500}
            className="hidden md:block hover:underline text-lg cursor-pointer"
          >
            Reviews
          </ScrollLink>
          <span></span>
        </div>
        <Link
          href="https://github.com/leeftk/leeftk/blob/main/README.md"
          target="blank"
        >
          <Button className="bg-[#333] hover:bg-[#444] rounded-xl text-lg p-6">
            Portfolio <ArrowRight className="ml-4" />
          </Button>
        </Link>
      </nav>
    </div>
  );
}
