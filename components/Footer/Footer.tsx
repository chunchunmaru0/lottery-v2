import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      {/* <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t bottom-0 "> */}

      <p className="text-xs text-gray-500 dark:text-gray-400">
        Lottery Checker v2, Desgined and Developed by @KaleyMoro
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          About
        </Link>
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
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
