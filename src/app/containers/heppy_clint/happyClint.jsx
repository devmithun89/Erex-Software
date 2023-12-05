"use client";

import SimpleSlider from "@/app/components/slider";
import React from "react";

export default function HappyClint() {
  return (
    <section className="px-6 pt-14 md:pt-8 md:px-10 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
        <h3 className="text-2xl font-medium md:text-4xl font-roboto">
          What our happy client say
        </h3>
        <p className="text-sm font-normal text-center text-litetext font-roboto">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className="w-full overflow-hidden md:pt-4 ">
        <SimpleSlider />
      </div>
    </section>
  );
}
