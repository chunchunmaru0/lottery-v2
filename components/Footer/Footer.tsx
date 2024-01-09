import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t">
      {/* <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t bottom-0 "> */}

      <p className="text-xs text-gray-500 dark:text-gray-400">
        Lottery Checker v2, Desgined and Developed by @KaleyMoro
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
      <div className="flex gap-4">
        <Link href="#">
          <FacebookIcon className="h-6 w-6" />
        </Link>
        <Link href="#">
          <TwitterIcon className="h-6 w-6" />
        </Link>
        <Link href="#">
          <InstagramIcon className="h-6 w-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
