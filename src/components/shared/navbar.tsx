"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import profile from "../../assets/profile.jpg";
import { ArrowRight } from "lucide-react";
import { Link as ScrollLink, Element } from "react-scroll";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";

interface NavBarProps {
  isHome?: boolean;
}

export default function NavBar({ isHome = true }: NavBarProps) {
  return (
    <div className=" md:max-w-6xl mx-auto">
      <nav className="flex items-center justify-between p-4 mt-4 md:mt-6 text-foreground">
        <div className="flex justify-between items-center p-2 px-6 w-9/12 rounded-2xl">
          <div className="flex items-center gap-0">
            <Avatar>
              <AvatarImage src="" alt="User Avatar" />
              <AvatarFallback>
                <Image src={profile} alt="33audits" />
              </AvatarFallback>
            </Avatar>
            <span className="font-semibold text-2xl ml-2">33Audits</span>
          </div>
          <Link
            href="/"
            className="hidden md:block hover:underline text-xl font-medium cursor-pointer hover:text-blue-600"
          >
            Home
          </Link>

          {isHome ? (
            <>
              <ScrollLink
                to={"audits"}
                smooth={true}
                duration={800}
                className="hidden md:block hover:underline text-xl font-medium cursor-pointer hover:text-blue-600"
              >
                Audits
              </ScrollLink>
              {/* <ScrollLink
                to={"reviews"}
                smooth={true}
                duration={800}
                className="hidden md:block hover:underline text-xl font-medium cursor-pointer hover:text-blue-600"
              >
                Reviews
              </ScrollLink> */}
            </>
          ) : (
            <>
              <Link
                href="/?#audits"
                className="hidden md:block hover:underline text-xl font-medium cursor-pointer hover:text-blue-600"
              >
                Audits
              </Link>
              {/* <Link
                href="/?#reviews"
                className="hidden md:block hover:underline text-xl font-medium cursor-pointer hover:text-blue-600"
              >
                Reviews
              </Link> */}
            </>
          )}

          <Link
            href="/blog"
            className="hidden md:block hover:underline text-xl font-medium cursor-pointer hover:text-blue-600"
          >
            Blog
          </Link>
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
        <div className="block md:hidden">
        <MobileNav />
        </div>
    
      </nav>
    </div>
  );
}
