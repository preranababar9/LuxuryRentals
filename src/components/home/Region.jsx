import React from "react";
import Image from "next/image";

const Region = () => {
  return (
    <section className="py-20 bg-lightbrown rounded-b-*">
      <div className="max-width overflow-hidden">
        <div>
          <div className="font-rufina text-center ">
            <h2 className="text-center lg:text-5xl text-3xl uppercase pb-5">
              Our Regions
            </h2>
            <p className="text-center pb-10 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum eos voluptatem itaque molestiae. Fugit exercitationem
              molestiae
            </p>
          </div>

          <div className="flex  gap-10 max-md:gap-5 max-lg:gap-5 justify-center items-center max-md:flex-col">
            <Image
              src="/images/region1.webp"
              alt="Hero image"
              className="w-1/3 max-md:w-3/4 object-cover"
              data-aos="fade-right"
              width={800}
              height={900}
            />

            <Image
              src="/images/region2.webp"
              alt="Hero image"
              className="w-1/3  max-md:w-3/4 object-cover"
              data-aos="fade-left"
              width={800}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Region;
