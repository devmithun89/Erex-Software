"use client";

import Link from "next/link";
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const handlClick = () => {
    console.log("Clicked Home Link");
    setVisible(false);
  };

  const shouldHide = () => {
    router.push("/");
    setVisible(true);
  };
  useEffect(() => {
    // Update visibility based on the current route
    setVisible(router.pathname !== "/");
  }, [router.pathname]);
  return (
    <>
      <nav>
        <div className="flex justify-center gap-16 cursor-pointer ">
          {/* Other Links */}
          <ScrollLink
            onClick={shouldHide}
            href="/"
            to="Hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className="relative group">
            Home
            {/* ... */}
            <span className="absolute -bottom-1 rounded left-0 w-full h-[3px] bg-primary origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </ScrollLink>

          {/* Use ScrollLink for "What We Do" */}
          {visible && (
            <ScrollLink
              to="What_We_Do"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="relative group">
              What We Do
              <span className="absolute -bottom-1 rounded  left-0 w-full h-[3px] bg-primary origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </ScrollLink>
          )}
          {visible && (
            <ScrollLink
              to="Service"
              spy={true}
              smooth={true}
              duration={500}
              offset={10}
              className="relative group">
              Service
              <span className="absolute -bottom-1 rounded left-0 w-full h-[3px] bg-primary origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </ScrollLink>
          )}
          {visible && (
            <ScrollLink
              to="Project"
              spy={true}
              smooth={true}
              duration={500}
              offset={-40}
              className="relative group">
              Project
              <span className="absolute -bottom-1 rounded left-0 w-full h-[3px] bg-primary origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </ScrollLink>
          )}

          {/* Other Links */}

          <Link href="/blog" onClick={handlClick} className="relative group">
            Blog
            <span className="absolute -bottom-1 rounded left-0 w-full h-[3px] transition-transform duration-300 origin-left transform scale-x-0 bg-primary group-hover:scale-x-100"></span>
          </Link>
          <Link href="/contact" onClick={handlClick} className="relative group">
            Contact
            <span className="absolute -bottom-1 rounded left-0 w-full h-[3px] bg-primary  origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>
      </nav>
    </>
  );
}
