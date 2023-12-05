"use client";

import React, {useState} from "react";
import {RxCross2} from "react-icons/rx";
import {CgMenuRightAlt} from "react-icons/cg";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";
import {useRouter} from "next/navigation";

import Link from "next/link";
import {flightRouterStateSchema} from "next/dist/server/app-render/types";

export default function MobileNav() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [animationParent] = useAutoAnimate();
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleHome = () => {
    setIsOpen(!isOpen);
    setExpanded(!expanded);
    setVisible(true);
  };
  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setIsOpen(false);
    setExpanded(false);
    router.push("/");
    setVisible(false);
  };

  return (
    <>
      <div>
        <div className="lg:hidden" ref={animationParent} onClick={handleHome}>
          {isOpen ? <RxCross2 size={30} /> : <CgMenuRightAlt size={30} />}
        </div>

        <nav
          className={`fixed inset-x-0 flex flex-col shadow-lg justify-center items-center mx-4 text-black duration-500 rounded-xl bg-skyblue lg:hidden `}
          style={{transform: `translateY(${isOpen ? "5%" : "-500px"})`}}>
          <section className="flex flex-col items-center gap-6 my-4">
            <ScrollLink
              onClick={handleLinkClick}
              href="/"
              to="Hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="relative group">
              Home
              {/* ... */}
            </ScrollLink>
            {visible && (
              <ScrollLink
                to="What_We_Do"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="relative group">
                What We Do
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
              </ScrollLink>
            )}

            <Link href="/blog" onClick={handleHome} className="relative group">
              Blog
            </Link>
            <Link href="/contact" onClick={handleHome} className="relative group">
              Contact
            </Link>
          </section>
        </nav>
      </div>
    </>
  );
}
