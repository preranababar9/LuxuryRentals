"use client";

import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);

  return (
    <div className="flex justify-around h-10vh absolute z-30 w-full items-center  bg-gradient-to-r from-blue-500 to-[#646464] py-5 top-0">
      <div>
        <Link href="/" className="uppercase text-xl tracking-wide font-raleway text-[#D9D9D9]">
          {" "}
          Luxury Rentals
        </Link>
      </div>

      <div className="flex z-30 ">
        {!open ? (
          <button
            className="md:hidden"
            onClick={() => {
              setOpen(true);
              setToggle(true);
            }}
          >
            <FiMenu size={30} className="text-white" />
          </button>
        ) : (
          <button
            className="md:hidden"
            onClick={() => {
              setOpen(false);
              setToggle(false);
            }}
          >
            <RxCross2 size={30} className="text-white" />
          </button>
        )}
      </div>

      {open && (
        <div className="lg:hidden top-0 absolute left-0 px-16 pt-32  h-[100vh] bg-gradient-to-r from-blue-500 to-[#646464] w-full z-10 flex flex-col ">
          <ul className="flex flex-col gap-5 items-center tracking-wide">
            <li className="text-2xl text-[#D9D9D9] font-raleway hover:scale-110 hover:text-white">
              Villas
            </li>
           <Link href="/aboutus" className="text-2xl text-[#D9D9D9] font-raleway hover:scale-110 hover:text-white">  
              About Us
            </Link>
            <li className="text-2xl text-[#D9D9D9] font-raleway hover:scale-110 hover:text-white">
              Contact
            </li>
          </ul>
        </div>
      )}

      <div className="max-md:hidden">
        <ul className="flex gap-10 tracking-wide">
          <li className="text-lg text-[#D9D9D9] font-raleway hover:scale-110 hover:text-white">
            Villas
          </li>
          <Link href="/aboutus" className="text-lg text-[#D9D9D9] font-raleway hover:scale-110 hover:text-white">  
            About Us
         </Link>
          <li className="text-lg text-[#D9D9D9] font-raleway hover:scale-110 hover:text-white">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
