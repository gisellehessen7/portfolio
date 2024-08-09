"use client";

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="p-4 text-2xl">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={150} height={150} className="cursor-pointer" />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              à propos
            </Link>
          </li>
          <li>
            <Link href="/projects">
              projets
            </Link>
          </li>
          <li>
            <Link href="/hesseng_resume.pdf" rel="noopener noreferrer">
              cv
            </Link>
          </li>
          <li>
            <Link href="/contact">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
