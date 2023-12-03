import React from "react";

export default function GreetSince() {
  return (
    <section className="px-6 pt-28 lg:px-20 lg:py-20">
      <div className="relative flex flex-col w-full gap-3 md:gap-6 md:flex-row">
        <div className="relative w-full ">
          <div className="absolute rounded-full bottom-4 right-4 -z-10 w-28 h-28 bg-yellowlite"></div>
          <img
            className="h-auto max-w-full"
            src="./unsplash.png"
            alt="unsplash"
            loading="lazy"
          />
        </div>
        <div className="relative flex flex-col justify-center w-full gap-8 ">
          <div className="absolute -top-2 lg:top-28 rounded-br-[70%] -z-10 w-36 h-36 bg-purplelite"></div>

          <h3 className="px-6 pl-4 text-3xl font-medium lg:text-4xl font-roboto">
            Great Digital Product
            <br /> Agency since 2016
          </h3>
          <p className="pl-4 font-normal lg:pl-4 lg:text-base text-litetext font-roboto">
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