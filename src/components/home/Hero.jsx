import React from "react";
import Image from "next/image";
import Search from "../common/Search";


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
      <div className="" >
      <div className="absolute z-30 top-[30%] w-fit left-[50%] text-nowrap -translate-x-[50%]  max-md:top-[60%]  max-md:text-center">
        <h1 className="xl:text-7xl   lg:text-7xl max-md:text-5xl text-6xl max-sm:text-3xl font-rufina uppercase font-bold  text-center text-white  pb-5" >
          be our guest
        </h1>
        <p className=" text-white lg:text-2xl max-md:bg-white max-md:text-lightbrown text-md px-2 mb-10 py-2 text-center uppercase ">
          live like a king in our best houses
        </p>
        </div>
        
        <div className="bg-white absolute z-30 lg:top-[60%] top-[80%] w-fit left-[50%] -translate-x-[50%] rounded-lg " >
          <Search/>
        </div>


        </div>
    </div>
  );
};

export default Hero;
