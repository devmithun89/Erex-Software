import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Image
        className="w-24 h-10"
        width={96}
        height={40}
        src="/erex.jpg"
        alt="Erexlogo"
      />
    </div>
  );
}
