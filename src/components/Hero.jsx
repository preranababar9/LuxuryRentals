import React from "react";
import Image from 'next/image';

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
      <div className="absolute z-30 top-[30%] lg:left-[25%]  max-width  max-md:top-[60%] lg:px-32 max-md:px-10 max-md:text-center">
        <h1 className="lg:text-7xl text-3xl font-rufina uppercase font-bold text-center text-white text- pb-5">
          be our guest
        </h1>
        <p className="text-lightbrown bg-white lg:text-2xl text-md px-1  py-2 text-center uppercase ">
          live like a king in our best houses
        </p>
      </div>
    </div>
  );
};

export default Hero;
