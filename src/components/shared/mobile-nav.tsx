"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" ">
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <MenuIcon className="text-4xl block md:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="block md:hidden bg-[#030612] border-0">
        <SheetHeader>
          {/* <SheetTitle>Edit profile</SheetTitle> */}
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>

        <div className="flex flex-col gap-5 mt-12">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="audits"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Audits
          </ScrollLink>

          {/* <ScrollLink
            to="reviews"
            smooth={true}
            duration={500}
            className="hover:underline text-lg cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Reviews
          </ScrollLink> */}

          <Link
          href="https://app.deform.cc/form/6d07745a-8a46-4445-b064-4755c72e8c4b/?page_number=0"
          target="blank"
        >
          <Button
            className="rounded-xl p-4 cursor-pointer bg-blue-700 hover:bg-blue-500 text-white"
            variant={"secondary"}
          >
            Book an Audit <ArrowRight className="ml-4" />
          </Button>
        </Link>
        </div>

        <SheetFooter className="justify-start sm:justify-start">
        <div className=" flex gap-6 mt-12">
        <Link
          href="https://t.me/audits33"
          target="blank"
          className="text-3xl hover:underline underline-offset-4"
          prefetch={false}
        >
          <i className="bi bi-telegram"></i>
        </Link>
        <Link
          href="https://github.com/leeftk/leeftk/blob/main/README.md"
          target="blank"
          className="text-3xl hover:underline underline-offset-4"
          prefetch={false}
        >
          <i className="bi bi-github"></i>
        </Link>
        <Link
          href="https://x.com/solidityauditor"
          target="blank"
          className="text-2xl hover:underline underline-offset-4"
          prefetch={false}
        >
          <i className="bi bi-twitter-x"></i>
        </Link>
      </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  );
}
