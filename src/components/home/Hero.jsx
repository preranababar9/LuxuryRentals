import React from "react";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className="h-[100vh] z-10 relative top-0">
      <Image
        src="/images/hero.svg"
        alt="Hero image"
        className="object-cover w-full h-full "
        width={100}
        height={100}
      />
      <div className="absolute z-30 top-[30%]  xl:left-[20%] lg:left-[10%]  max-md:left-[25%] max-sm:left-[5%] left-[5%]  max-md:top-[60%]  max-md:text-center">
        <h1 className="xl:text-7xl lg:text-7xl max-md:text-5xl text-6xl max-sm:text-3xl font-rufina uppercase font-bold  text-center text-white  pb-5">
          be our guest
        </h1>
        <p className=" text-white lg:text-2xl max-md:bg-white max-md:text-lightbrown text-md px-2 mb-20 py-2 text-center uppercase ">
          live like a king in our best houses
        </p>

        <div className="bg-white max-md:hidden flex justify-around lg:gap-10 gap-4 py-3 lg:px-10 px-2 rounded-lg  shadow-2xl shadow-black w-full">
          <div className="flex gap-8 items-center ">
            <p className="lg:text-lg text-md font-bold font-raleway">Italy</p>
            <IoMdArrowDropdown size={24} />
          </div>

          <div className="flex gap-8 items-center">
            <p className="lg:text-lg text-md font-raleway">Select Dates</p>
            <IoMdArrowDropdown size={24} />
          </div>

          <div className="flex gap-8 items-center">
            <p className="lg:text-lg text-md font-raleway">Guests</p>
            <IoMdArrowDropdown size={24} />
          </div>

          <div className="flex gap-8 items-center">
            <p className="lg:text-lg text-md font-bold font-raleway">Price</p>
            <IoMdArrowDropdown size={24} />
          </div>

          <div className="flex gap-2 bg-lightbrown px-5 py-5 rounded-lg items-center">
            <p className="lg:text-lg text-md font-raleway">Search</p>
            <IoIosSearch size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
