import React from "react";
import "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="flex justify-center gap-16 cursor-pointer">
        <Link href="/" className="relative group">
          Home
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link href="/" className="relative group">
          What We Do
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary  origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link href="/" className="relative group">
          Service
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary  origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link href="/" className="relative group">
          Project
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary  origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link href="/blog" className="relative group">
          Blog
          <span className="absolute bottom-0 left-0 w-full h-[3px] transition-transform duration-300 origin-left transform scale-x-0 bg-primary group-hover:scale-x-100"></span>
        </Link>
        <Link href="/contact" className="relative group">
          Contact
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary  origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </div>
    </nav>
  );
}
