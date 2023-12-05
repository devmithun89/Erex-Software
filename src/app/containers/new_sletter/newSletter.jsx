import React from "react";

export default function NewSletter() {
  return (
    <>
      <section id="contact" className="px-6 pt-10 lg:py-10 lg:px-12">
        <div className="flex flex-col items-center justify-center w-full gap-3 pb-5">
          <h3 className="text-2xl font-medium text-black md:hidden md:text-3xl font-roboto ">
            Subscribe Newsletter
          </h3>
          <p className="text-sm font-normal text-center md:text-xl md:hidden font-roboto text-litetext">
            I will update good news and promotion service not spam
          </p>
        </div>
        <div className="relative flex justify-between lg:py-16 lg:px-8">
          <div className="absolute z-40 flex items-center justify-center w-full h-full px-4 overflow-hidden">
            <div
              className="h-auto  md:hidden rounded-[60px] border-whiteborder shadow-md focus:outline-none  placeholder-litetext stroke-none border-[1px] border-solid bg-white px-2 py-2
              w-full flex justify-between flex-shrink-0 ">
              <input
                className="h-auto rounded-[60px]  px-6 focus:outline-none  placeholder-litetext 
                max-w-[65%] flex-shrink-0 "
                type="text"
                name="text"
                placeholder="Enter your email address.."
                id="#"
              />
              <button className="px-4 py-3 text-xs  rounded-[60px] text-white font-roboto font-medium bg-primary">
                Contact Now
              </button>
            </div>
          </div>
          <div className="w-1/3  lg:w-2/5 xl:w-1/2 bg-skybluelite rounded-l-[75px] flex-col flex justify-center items-center">
            <div className="absolute lg:left-2 lg:w-24 -bottom-2 -left-2  w-14 h-14 lg:h-24 bg-yellowlite rounded-bl-[85%] -z-10 lg:bottom-10 "></div>

            <div className="flex flex-col md:gap-4">
              <h3 className="hidden text-2xl font-medium text-black md:block md:pl-4 md:text-3xl lg:text-4xl font-roboto ">
                Subscribe Newsletter
              </h3>
              <p className="hidden font-normal md:block md:text-xs md:pl-4 lg:text-base xl:text-base font-roboto text-litetext">
                I will update good news and promotion service not spam
              </p>
            </div>
          </div>
          <div>
            <img
              className="absolute hidden lg:block h-auto max-w-[196px] right-0 top-0 -z-10"
              src="./Dot2.png"
              alt="Dot"
            />
          </div>
          <div className="relative flex items-center justify-end w-2/3 bg-skybluelite md:z-40 lg:w-3/5 xl:w-1/2 md:pl-16 lg:pl-10 xl:pl-0 ">
            <div className="absolute flex items-center justify-start w-full h-auto rounded-[60px] md:mx-1  lg:mx-4 xl:mx-8 border-whiteborder shadow-md stroke-none border-[1px] border-solid bg-white ">
              <div className=" hidden md:block focus:outline-none  placeholder-litetext stroke-none w-[70%] h-auto  ">
                <input
                  className="flex-shrink-0 w-full py-8 max-h-fit md:px-4 xl:px-10 lg:px-8 rounded-l-[60px] focus:outline-none placeholder-litetext "
                  type="text"
                  name="text"
                  placeholder="Enter your email address.."
                  id="#"
                />
              </div>
              <div className=" hidden focus:outline-none stroke-none  w-[30%] py-4 md:flex items-center justify-end pr-4 h-auto">
                <button className="px-6 py-4 md:text-xs lg:text-sm xl:text-base rounded-[60px] text-white font-roboto font-medium bg-primary">
                  Contact Now
                </button>
              </div>
            </div>
            <img
              className="lg:w-[543px]  lg:h-[292px] flex-shrink-0 "
              src="./Rectangle31.png"
              alt="Rectangle"
            />
          </div>
        </div>
      </section>
    </>
  );
}
