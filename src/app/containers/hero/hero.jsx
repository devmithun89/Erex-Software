import React from "react";

export default function Hero() {
  return (
    <div>
      <section
        id="Hero"
        className="flex flex-col-reverse items-center justify-between w-full py-6 md:pl-16 lg:py-10 md:flex md:flex-row">
        <div className="w-[100%]  z-10  px-8 md:px-0 md:pl-4 md:gap-6 lg:gap-10 gap-6 pt-16 md:pt-8 flex flex-col items-start relative">
          <h3 class="md:text-3xl lg:text-5xl text-2xl font-medium font-roboto max-w-xl ">
            A Digital Product Agency
          </h3>
          <p class="font-normal font-roboto max-w-xl">
            Leading digital agency with solid design and development expertise. We build
            readymade websites, mobile applications, and elaborate online business
            services.
          </p>
          <button className="px-8 py-4 bg-primary text-white font-roboto font-medium rounded-[60px]">
            Contact Now
          </button>
          <img
            className="absolute -bottom-16 -z-10 left-4 md:-bottom-28  md:-left-4 w-[254px] h-[94px] md:w-[384px] md:h-[144px]"
            src="./DotOrnament.png"
            alt="Dotpng"
          />
        </div>
        <div class="w-[100%] z-10  items-center flex justify-end relative  ">
          <div className="absolute top-0 w-20 h-20 rounded-full md:top-0 lg:top-0 md:-left-6 lg:-left-8 left-3 -z-10 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-skyblue"></div>
          <div>
            <img
              class="h-auto max-w-full pl-12 md:pl-6  "
              src="./hero.png"
              alt="heroBenar"
            />
          </div>
          <div
            className="absolute  right-16 -bottom-12 md:-bottom-16  -z-10  rounded-br-[50%] w-24 h-24
          md:w-32 md:h-32  lg:w-36 lg:h-36 bg-yellowlite"></div>
        </div>
      </section>
    </div>
  );
}
