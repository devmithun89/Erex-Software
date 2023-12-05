import Carousel from "better-react-carousel";
import React, {useEffect, useMemo, useState} from "react";
import {AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai";

export default function slider() {
  const MyDot = ({isActive}) => (
    <span
      style={{
        display: "inline-block",
        bottom: 10,
        height: isActive ? "15px" : "10px",
        width: isActive ? "15px" : "10px",
        background: isActive ? "#2639ED" : "#E7F0FC",
        borderRadius: "10px",
      }}></span>
  );

  const data = [
    {name: "Raj", id: 1},
    {name: "Raj", id: 1},
    {name: "Raj", id: 1},
    {name: "Raj", id: 1},
  ];

  return (
    <div>
      <Carousel
        cols={1}
        rows={1}
        gap={10}
        // autoplay={4000}
        dotColorActive="#2639ED"
        arrowRight={
          <AiFillRightCircle
            size={50}
            className="absolute top-1/2 right-[1px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-skyblue text-2xl text-primary"
          />
        }
        arrowLeft={
          <AiFillLeftCircle
            size={50}
            className="absolute top-1/2 left-[1px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-skyblue text-2xl text-primary"
          />
        }
        showDots
        dot={MyDot}
        loop
        responsiveLayout={[
          {
            breakpoint: 1380,
            cols: 1,
            gap: 5,
          },
          {
            breakpoint: 640,
            cols: 1,
            gap: 10,
          },
        ]}>
        {data.map((item, index) => {
          return (
            <Carousel.Item>
              {/* normally width is set to 95% | for screens <= 640px width=90% | for screens <= 370px width=85% */}
              <div className="w-[95%] max-sm:w-[90%] max-xsm:w-[85%] py-4 gap-2 flex lg:gap-4 justify-center items-center md:px-8">
                <div className="relative">
                  <div class="absolute  bottom-12 hidden  md:block left-10 w-24 h-24 ring-8 -z-10 ring-pink rounded-full"></div>
                  <div>
                    <img
                      className="absolute hidden  md:block h-auto max-w-[196px] right-4  -z-10"
                      src="./Dot2.png"
                      alt="Dot"
                    />
                  </div>
                  <img
                    className="max-w-full hidden  md:block ;
                h-auto;
               "
                    src="./unsplash_MTZTGvDsHFY.png"
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
                <div className="pt-4 max-w-[40%] md:max-w-[100%] ">
                  <img className="h-auto md:max-w-full" src="./Group.png" alt="Group" />
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
