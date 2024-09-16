import Link from "next/link";
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto flex flex-row gap-2 justify-between py-12 w-full shrink-0 items-center px-12 border-t border-t-neutral-600">
      <Avatar>
        <AvatarImage
          src="https://pbs.twimg.com/profile_images/1677046353451466752/JQtGE1MF_400x400.jpg"
          alt="User Avatar"
        />
        <AvatarFallback>33</AvatarFallback>
      </Avatar>
      <p className="text-2xl font-semibold ml-2">33 Audits</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="https://t.me/audits33"
          target="blank"
          className="text-4xl hover:underline underline-offset-4"
          prefetch={false}
        >
          <i className="bi bi-telegram"></i>
        </Link>
        <Link
          href="https://github.com/leeftk/leeftk/blob/main/README.md"
          target="blank"
          className="text-4xl hover:underline underline-offset-4"
          prefetch={false}
        >
          <i className="bi bi-github"></i>
        </Link>
        <Link
          href="https://x.com/solidityauditor"
          target="blank"
          className="text-3xl hover:underline underline-offset-4"
          prefetch={false}
        >
          <i className="bi bi-twitter-x"></i>
        </Link>
      </nav>
    </footer>
  );
}
