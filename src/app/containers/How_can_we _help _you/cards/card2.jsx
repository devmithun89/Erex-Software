import Image from "next/image";
import React from "react";

export default function Card2() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-2 py-2 xl:px-4 rounded-3xl xl:py-4 w-full h-[48%] xl:h-[45%] text-center bg-white  shadow-lg stroke-shadow ring-1 ring-shadow gap-1 sm:gap-2 xl:gap-6  ">
        <div className="px-1 py-1 rounded-xl bg-redlite bg-re sm:px-2 sm:py-2 md:px-2 md:py-2 lg:py-5 lg:px-5 xl:px-6 xl:py-6">
          <Image
            className="rounded-lg w-11 h-11 sm:w-12 sm:h-12 md:w-20 md:h-20 md lg:w-24 lg:h-24 xl:w-24 xl:h-24"
            src="/code-1 1.png"
            alt="code"
            sizes="100vw"
            width={500}
            height={300}
          />
        </div>
        <h3 className="text-[10px] sm:text-sm md:text-lg lg:text-lg xl:text-xl font-medium font-roboto">
          Development Website and App
        </h3>
        <p className="text-[7px] sm:text-xs lg:text-base xl:text-lg  font-normal font-roboto">
          Communication protocols apart
          <br />
          from engagement models
        </p>
      </div>
    </>
  );
}
