import Image from "next/image";
import React from "react";

export default function GreetSince() {
  return (
    <section id="Project" className="px-6 pt-16 md:pt-16 lg:pt-20 lg:px-20 lg:py-20">
      <div className="relative flex flex-col w-full gap-3 md:gap-6 md:flex-row">
        <div className="relative w-full ">
          <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full md:bottom-2 lg:bottom-4 md:right-0 lg:right-4 -z-10 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-yellowlite"></div>
          <Image
            className="h-auto max-w-full"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
            src="/unsplash.png"
            alt="unsplash"
          />
        </div>
        <div className="relative flex flex-col justify-center w-full gap-8 ">
          <div className="absolute -top-2 lg:top-5 xl:top-28 md:top-0 rounded-br-[70%] -z-10 w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-36 xl:h-36 bg-purplelite"></div>

          <h3 className="px-6 pl-4 text-2xl font-medium text-black md:text-3xl lg:text-4xl font-roboto">
            Great Digital Product
            <br /> Agency since 2016
          </h3>
          <p className="relative pl-4 text-xs font-normal lg:pl-4 lg:text-base text-litetext font-roboto">
            Our Business Plan is a written document describing a company's core business
            activites, Objectives, and how it plans to achieve its goals. Our goal is to
            provide our client high quality Product with modern idea accordingly their
            budgets and according thir reuirements.
          </p>
        </div>
      </div>
    </section>
  );
}
