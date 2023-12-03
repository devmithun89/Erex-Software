"use client";
import React, {useEffect, useState} from "react";
import Logo from "./logo";
import Nav from "./nav";
import MobileNav from "./mobileNav";

export default function Header() {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
      return () => window.removeEventListener("scroll", scrollYPos);
    });
  });

  return (
    <>
      <header
        className={`${
          header ? "py-5 bg-white shadow-lg" : "py-6 bg-white "
        } sticky top-0 z-30  transition-all`}>
        <div className="container mx-auto">
          <div className="flex justify-between px-6 md:px-10 lg:px-20">
            <Logo />
            <div className="items-center hidden lg:flex gap-x-2">
              <Nav />
            </div>
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
