import React from "react";

export default function OurClint() {
  return (
    <div className="flex flex-col px-6 pt-16 lg:justify-between lg:flex-row md:pt-28 lg:pt-24 md:px-20 lg:px-20">
      <div className="flex flex-col items-center gap-2 text-center lg:items-start">
        <h3 className="text-5xl font-medium text-black font-roboto ">Our Client</h3>
        <p className="text-[#757575] font-normal text-start font-roboto ">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-4 md:justify-center md:gap-6 lg:gap-8 xl:gap-14 md:flex-row ">
        <img
          className="w-[150px] h-[49px] md:w-[110px] md:h-auto lg:w-[120px] lg:h-auto xl:w-[150px] xl:h-[49px]"
          src="./GoogleLogo.png"
          alt="GoogleLogo"
          loading="lazy"
        />

        <img
          className="w-[166px] h-[52px]  md:w-[110px] md:h-auto lg:w-[120px] lg:h-auto xl:w-[166px] xl:h-[52px]"
          src="./AirbnbLogo.png"
          alt="AirbnbLogo"
          loading="lazy"
        />
        <img
          className="w-[166px] h-[27px]  md:w-[110px] md:h-auto lg:w-[120px] lg:h-auto xl:w-[166px] xl:h-[27px] "
          src="./UberEatsLogo.png"
          alt="UberEatsLogo"
          loading="lazy"
        />
        <img
          className="w-[141px] h-[42px]  md:w-[110px] md:h-auto lg:w-[120px] lg:h-auto xl:w-[141px] xl:h-[42px] "
          src="./AmazonLogo.png"
          alt="AmazonLogo"
          loading="lazy"
        />
      </div>
    </div>
  );
}
