"use client";
import SlickCarousel from "../../components/slickcarousel";
import React from "react";
export default function OurClint() {
  return (
    <>
      <section
        id="What_We_Do"
        className="flex flex-col w-full px-6 pt-16 overflow-hidden lg:justify-between lg:flex-row md:pt-28 lg:pt-28 xl:pt-24 md:px-20 lg:px-20">
        <div className="relative flex flex-col items-center justify-center gap-2 text-center lg:w-2/5 lg:pr-4 lg:items-start">
          <h3 className="pl-1 text-2xl font-medium text-black md:text-3xl lg:text-4xl font-roboto">
            Our Client
          </h3>
          <p className="text-[#757575] font-normal text-sm lg:text-base text-center  px-2 lg:text-left font-roboto ">
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className="right-0 py-6 lg:w-3/5 lg:absolute lg:pr-20 ">
          <SlickCarousel />
        </div>
      </section>
    </>
  );
}
