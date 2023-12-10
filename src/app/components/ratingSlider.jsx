"use client";

import Image from "next/image";
import React, {useEffect, useMemo, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GrNext} from "react-icons/gr";
import {GrPrevious} from "react-icons/gr";

export default function RatingSlider() {
  const data = [
    {name: "Raj", id: 1},
    {name: "Raj", id: 1},
    {name: "Raj", id: 1},
    {name: "Raj", id: 1},
  ];
  const slider = React.useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
  };

  return (
    <div className="relative w-full md:px-14 ">
      <button
        className="absolute z-10 hidden p-2 text-white -translate-y-1/2 rounded-full cursor-pointer md:block md:text-2xl right-1 top-1/2 md:right-3 bg-primary ring-sky-200 ring-4"
        onClick={() => slider?.current?.slickNext()}>
        <GrNext />
      </button>
      <button
        className="absolute z-10 hidden p-2 text-white -translate-y-1/2 rounded-full cursor-pointer md:block left-1 md:text-2xl top-1/2 md:left-3 bg-primary ring-sky-200 ring-4"
        onClick={() => slider?.current?.slickPrev()}>
        <GrPrevious />
      </button>
      <Slider ref={slider} {...settings}>
        {data.map((item, index) => {
          return (
            /* normally width is set to 95% | for screens <= 640px width=90% | for screens <= 370px width=85% */

            <div className="w-[100%] max-sm:w-[90%] h-full  md:py-4 gap-2 flex lg:gap-4 justify-center items-center md:px-8">
              <div className="flex items-center justify-center ">
                <div className="relative">
                  <div class="absolute  bottom-12 hidden  md:block left-10 w-24 h-24 ring-8 -z-10 ring-pink rounded-full"></div>
                  <div>
                    <Image
                      className="absolute hidden  md:block h-auto max-w-[196px] right-4  -z-10"
                      src="/Dot2.png"
                      alt="Dot"
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      width={500}
                      height={300}
                    />
                  </div>

                  <Image
                    className=" hidden  md:block ;"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    src="/unsplash_MTZTGvDsHFY.png"
                    alt="unsplash_MTZTGvDsHFY"
                  />
                </div>

                <div className="flex flex-col w-full gap-3">
                  <h3 className="text-lg font-medium md:text-base lg:text-2xl font-roboto">
                    Matthew Paul
                  </h3>
                  <p className="text-[10px] font-normal  md:text-xs lg:text-lg text-litetext font-roboto">
                    Perfect, very googd job! Thank you for the amazing design and work.
                    Really impressed with the high quality and quick turnaround time.
                    Highly recommend.
                  </p>
                </div>
                <div className="pt-4  max-w-[40%] md:max-w-[100%] ">
                  <div className="relative w-full h-full"></div>
                  <Image
                    className="h-auto p-2 md:max-w-full"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    src="/Group.png"
                    alt="Group"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
