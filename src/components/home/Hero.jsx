import React from "react";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className="h-[100vh] z-10 relative  top-0">
      <Image
        src="/images/Image2.jpg"
        alt="Hero image"
        className="object-cover w-full h-full "
      width={1000}
      height={800}
      />
      <div className="">
      <div className="absolute z-30 top-[30%] w-fit left-[50%] text-nowrap -translate-x-[50%]  max-md:top-[60%]  max-md:text-center">
        <h1 className="xl:text-7xl   lg:text-7xl max-md:text-5xl text-6xl max-sm:text-3xl font-rufina uppercase font-bold  text-center text-white  pb-5">
          be our guest
        </h1>
        <p className=" text-white lg:text-2xl max-md:bg-white max-md:text-lightbrown text-md px-2 mb-20 py-2 text-center uppercase ">
          live like a king in our best houses
        </p>
        </div>
        <div className="bg-white absolute z-30 top-[60%] w-fit left-[50%] -translate-x-[50%] max-md:hidden text-nowrap flex justify-around lg:gap-10 gap-4 py-3 lg:px-10 px-2 rounded-lg  shadow-2xl shadow-black ">
          <div className="flex gap-8 items-center cursor-pointer ">
            <p className="lg:text-lg text-md font-bold font-raleway">Italy</p>
            <IoMdArrowDropdown size={24} />
          </div>

          <div className="flex gap-8 items-center cursor-pointer">
            <p className="lg:text-lg text-md font-raleway">Select Dates</p>
            <IoMdArrowDropdown size={24} />
          </div>

          <div className="flex gap-8 items-center cursor-pointer">
            <p className="lg:text-lg text-md font-raleway">Guests</p>
            <IoMdArrowDropdown size={24} />
          </div>

          <div className="flex gap-8 items-center cursor-pointer">
            <p className="lg:text-lg text-md font-bold font-raleway">Price</p>
            <IoMdArrowDropdown size={24} />
          </div>

          <div className="flex gap-3 bg-lightbrown px-6 py-4 h-12 rounded-lg items-center">
            <p className="lg:text-lg text-md font-raleway">Search</p>
            <IoIosSearch size={24} />
          </div>
        </div>
        </div>
    </div>
  );
};

export default Hero;
