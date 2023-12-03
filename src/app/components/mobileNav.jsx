import React, {useState} from "react";
import {RxCross2} from "react-icons/rx";
import {CgMenuRightAlt} from "react-icons/cg";

export default function MobileNav() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(!IsOpen)}>
        {IsOpen ? <RxCross2 size={30} /> : <CgMenuRightAlt size={30} />}
      </div>

      <div
        className={
          IsOpen
            ? `fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-white p-10 ease-in duration-500`
            : `fixed left-[-100%] top-0 p-10 ease-in duration-500`
        }></div>
    </>
  );
}
