"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {GrNext} from "react-icons/gr";
import {GrPrevious} from "react-icons/gr";
export default function SlickCarousel() {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="relative w-full px-2">
        {/* <button
          className="absolute z-10 p-2 text-white -translate-y-1/2 rounded-full cursor-pointer lg:hidden md:text-2xl -right-5 top-1/2 md:-right-12 bg-primary ring-sky-200 ring-4"
          onClick={() => slider?.current?.slickNext()}>
          <GrNext />
        </button>
        <button
          className="absolute z-10 p-2 text-white -translate-y-1/2 rounded-full cursor-pointer lg:hidden -left-5 md:text-2xl top-1/2 md:-left-12 bg-primary ring-sky-200 ring-4"
          onClick={() => slider?.current?.slickPrev()}>
          <GrPrevious />
        </button> */}
        <Slider ref={slider} {...settings}>
          <div className="px-2 pt-1">
            <Image
              className="w-full h-full"
              src="/GoogleLogo.png"
              alt="GoogleLogo"
              sizes="100vw"
              width={500}
              height={300}
            />
          </div>
          <div className="px-2">
            <Image
              className="w-full h-full "
              src="/AirbnbLogo.png"
              alt="AirbnbLogo"
              sizes="100vw"
              width={500}
              height={300}
            />
          </div>
          <div className="px-2 pt-3">
            <Image
              className="w-full h-full "
              src="/UberEatsLogo.png"
              alt="UberEatsLogo"
              sizes="100vw"
              width={500}
              height={300}
            />
          </div>
          <div className="px-2 pt-3">
            <Image
              className="w-full h-full"
              src="/AmazonLogo.png"
              alt="AmazonLogo"
              sizes="100vw"
              width={500}
              height={300}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
