import React from "react";

export default function Help() {
  return (
    <>
      <section className="relative h-auto pt-20">
        <div className="z-30 flex flex-row w-full h-full pl-6 md:pl-10 lg:pl-16 ">
          <img
            className="object-cover h-auto max-w-full mx-w-full -z-10"
            src="./HelpSec.png"
            alt="Helpsec"
            loading="lazy"
          />
          <div className="absolute w-[35%] flex-wrap justify-center h-full text-left flex flex-col gap-1 sm:gap-2 xl:gap-6 ">
            <h3 className="flex-wrap pl-2 text-xs font-medium sm:text-sm md:text-2xl lg:text-4xl xl:pl-6 xl:text-5xl font-roboto">
              How can we help <br />
              your Business ?
            </h3>
            <p className="text-[#565656] pl-2 sm:text-xs text-[8px] lg:text-base xl:text-lg font-roboto font-normal flex-wrap">
              We build readymade websites, mobile applications, and elaborate online
              business services.
            </p>
          </div>
          <div className="w-[60%] h-full flex  xl:gap-8 pr-4 gap-2 md:gap-4 md:pr-16 sm:pr-10 lg:pr-16 xl:pr-44 absolute right-0 ">
            {/* first card */}
            <div className="flex flex-col w-full gap-2 pt-2 sm:pt-4 xl:pt-16 xl:gap-6">
              <div className="flex flex-col items-center justify-center px-2 py-2 xl:px-4 rounded-3xl xl:py-4 w-full h-[48%] xl:h-[45%] text-center bg-white  shadow-lg stroke-shadow ring-1 ring-shadow gap-1 sm:gap-2 xl:gap-6  ">
                <div className="px-1 py-1 rounded-xl bg-bule sm:px-2 sm:py-2 md:px-2 md:py-2 lg:py-5 lg:px-5 xl:px-6 xl:py-6">
                  <img
                    className="rounded-lg w-11 h-11 sm:w-12 sm:h-12 md:w-20 md:h-20 md lg:w-24 lg:h-24 xl:w-24 xl:h-24"
                    src="./box-search1.png"
                    alt="box-search1"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[10px] sm:text-sm md:text-lg lg:text-lg xl:text-xl font-medium font-roboto">
                  Business Idea Planning
                </h3>
                <p className="text-[7px] sm:text-xs lg:text-base xl:text-lg  font-normal font-roboto">
                  We present you a proposal and <br />
                  discuss niffty-gritty like
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-2 xl:px-4 rounded-3xl xl:py-4 w-full h-[48%] xl:h-[45%] text-center bg-white  shadow-lg stroke-shadow ring-1 ring-shadow gap-1 sm:gap-2 xl:gap-6  ">
                <div className="px-1 py-1 rounded-xl bg-redlite bg-re sm:px-2 sm:py-2 md:px-2 md:py-2 lg:py-5 lg:px-5 xl:px-6 xl:py-6">
                  <img
                    className="rounded-lg w-11 h-11 sm:w-12 sm:h-12 md:w-20 md:h-20 md lg:w-24 lg:h-24 xl:w-24 xl:h-24"
                    src="./code-1 1.png"
                    alt="code"
                    loading="lazy"
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
            </div>
            {/* ! secound card */}
            <div className="flex flex-col w-full gap-2 pb-2 xl:pb-16 xl:gap-6">
              <div className="flex flex-col items-center justify-center px-2 py-2 xl:px-4 rounded-3xl xl:py-4 w-full h-[48%] xl:h-[45%] text-center bg-white  shadow-lg stroke-shadow ring-1 ring-shadow gap-1 sm:gap-2 xl:gap-6  ">
                <div className="px-1 py-1 bg-yellowlite rounded-xl sm:px-2 sm:py-2 md:px-2 md:py-2 lg:py-5 lg:px-5 xl:px-6 xl:py-6">
                  <img
                    className="rounded-lg w-11 h-11 sm:w-12 sm:h-12 md:w-20 md:h-20 md lg:w-24 lg:h-24 xl:w-24 xl:h-24"
                    src="./empty-wallet 1.png"
                    alt="empty-wallet"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[10px] sm:text-sm md:text-lg lg:text-lg xl:text-xl font-medium font-roboto">
                  Market Analysis Project
                </h3>
                <p className="text-[7px] sm:text-xs lg:text-base xl:text-lg  font-normal font-roboto">
                  Protocols apart from aengage <br />
                  models, pricing billing
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-2 xl:px-4 rounded-3xl xl:py-4 w-full h-[48%] xl:h-[45%] text-center bg-white  shadow-lg stroke-shadow ring-1 ring-shadow gap-1 sm:gap-2 xl:gap-6  ">
                <div className="px-1 py-1 rounded-xl bg-greenlite sm:px-2 sm:py-2 md:px-2 md:py-2 lg:py-5 lg:px-5 xl:px-6 xl:py-6">
                  <img
                    className="rounded-lg w-11 h-11 sm:w-12 sm:h-12 md:w-20 md:h-20 md lg:w-24 lg:h-24 xl:w-24 xl:h-24"
                    src="./chart-square 1.png"
                    alt="chart-square"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[10px] sm:text-sm md:text-lg lg:text-lg xl:text-xl font-medium font-roboto">
                  Business Idea Planning
                </h3>
                <p className="text-[7px] sm:text-xs lg:text-base xl:text-lg  font-normal font-roboto">
                  We present you a proposal and <br />
                  discuss niffty-gritty like
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
