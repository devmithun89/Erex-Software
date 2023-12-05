import React from "react";
import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Card3 from "./cards/card3";
import Card4 from "./cards/card4";

export default function Help() {
  return (
    <>
      <section
        id="Service"
        className="relative items-center justify-center w-full h-auto pt-40 md:pt-20">
        {/*heading for mobile devices */}

        <div className="absolute flex flex-col items-center justify-center gap-2 md:hidden top-8">
          <h3 className="flex-wrap px-6 text-2xl font-medium text-center font-roboto">
            How can we help your Business ?
          </h3>
          <p className="text-[#565656] px-6 text-sm text-center font-roboto font-normal flex-wrap">
            We build readymade websites, mobile applications, and elaborate online
            business services.
          </p>
        </div>

        <div className="relative z-30 flex w-full h-full pl-6 md:flex md:flex-row md:pl-10 lg:pl-16">
          <img
            className="object-cover h-auto max-w-full mx-w-full -z-10"
            src="./HelpSec.png"
            alt="Helpsec"
          />
          {/*card for mobile devices */}
          <div
            className="absolute top-0 md:hidden
           flex justify-center w-[90%] gap-4">
            <div className="flex flex-col gap-2 pt-3">
              <Card1 />
              <Card2 />
            </div>
            <div className="flex flex-col gap-2 ">
              <Card3 />
              <Card4 />
            </div>
          </div>

          {/* for Tablet and Laptop devices */}

          <div className="absolute w-[35%] hidden  flex-wrap justify-center h-full text-left md:flex flex-col gap-1 sm:gap-2 xl:gap-6 ">
            <h3 className="flex-wrap pl-2 text-xs font-medium sm:text-sm md:text-2xl lg:text-4xl xl:pl-6 xl:text-5xl font-roboto">
              How can we help <br />
              your Business ?
            </h3>
            <p className="text-[#565656] pl-2 sm:text-xs xl:pl-6 text-[8px] lg:text-base xl:text-lg font-roboto font-normal flex-wrap">
              We build readymade websites, mobile applications, and elaborate online
              business services.
            </p>
          </div>
          <div className="w-[60%] hidden h-full md:flex  xl:gap-8  gap-2 md:gap-4 md:pr-16 sm:pr-10 lg:pr-16 xl:pr-44 absolute right-0 ">
            {/* first card */}
            <div className="flex flex-col w-full gap-2 pt-2 sm:pt-4 xl:pt-16 xl:gap-6">
              <Card1 />
              <Card2 />
            </div>
            {/* ! secound card */}
            <div className="flex flex-col w-full gap-2 pb-2 xl:pb-4 xl:gap-6">
              <Card3 />
              <Card4 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
