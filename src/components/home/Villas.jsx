"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Villas = () => {
  return (
    <section className="py-20 bg-[#f4f3f1]">
      <div className="max-width">
        <div className="font-rufina text-center ">
          <h2 className="text-center lg:text-5xl text-3xl pb-5">
            Top Pick Villas
          </h2>
          <p className="text-center pb-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eos voluptatem itaque molestiae. Fugit exercitationem molestiae
            saepe, repudiandae ipsa distinctio recusandae neque? Ab officiis qui
            ratione. Odit facilis dignissimos enim.
          </p>
        </div>

        {/* parent div */}
        <div className="flex gap-10 items-center ">
          {/* 1st div */}

          <Swiper
            spaceBetween={50}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              // when window width is >= 1024px (desktop)
              1024: {
                slidesPerView: 3, // Show 3 slides on desktop
              },
              // when window width is >= 640px (tablet)
              640: {
                slidesPerView: 2, // Show 2 slides on tablet
              },
              // when window width is < 640px (mobile)
              0: {
                slidesPerView: 1, // Show 1 slide on mobile
              },
            }}
          >
            {facility.map((item, index) => (
              <SwiperSlide
                key={index}
                className="rounded-lg lg:w-1/3 bg-white "
              >
                {/* image div */}
                <div className=" ">
                  <Image
                    src={item.img}
                    alt="Hero image"
                    className="w-full rounded-lg object-cover "
                    quality={100} 
                    width={500}
                    height={500}
                  />

                  <div className="font-rufina px-10">
                    <p className="pb-2 font-bold text-lg">
                      {item.place}-{" "}
                      <span className="font-normal text-md">{item.type}</span>
                    </p>

                    <h3 className="text-3xl ">{item.name}</h3>
                  </div>

                  <div className="flex flex-wrap justify-evenly  ">
                    <div className="flex items-center gap-5 ">
                      <Image
                        src={item.icon}
                        alt="Hero image"
                        className="w-1/5 h-20"
                        width={10}
                        height={10}
                      />

                      <p className="text-lg font-rufina">{item.sub}</p>
                    </div>

                    <div className="flex items-center gap-5">
                      <Image
                        src="/icons/guests.svg"
                        alt="Hero image"
                        className="w-1/5 h-20"
                        width={10}
                        height={10}
                      />

                      <p className="text-lg  font-rufina">8 Guests</p>
                    </div>

                    <div className="flex items-center gap-x-5">
                      <Image
                        src="/icons/guests.svg"
                        alt="Hero image"
                        className="w-1/5 h-20"
                        width={10}
                        height={10}
                      />

                      <p className="text-lg font-rufina">8 Guests</p>
                    </div>

                    <div className="flex items-center gap-5">
                      <Image
                        src="/icons/guests.svg"
                        alt="Hero image"
                        className="w-1/5 h-20"
                        width={10}
                        height={10}
                      />

                      <p className="text-lg  font-rufina">8 Guests</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Villas;

const facility = [
  {
    img: "/images/villa1.svg",
    place: "Italy",
    type: "Mountains",
    name: "Villa Makarska",
    icon: "/icons/guests.svg",
    sub: "Guests",
  },
  {
    img: "/images/villa2.svg",
    place: "Italy",
    type: "Mountains",
    name: "Villa Makarska",
    icon: "/icons/guests.svg",
    sub: "Guests",
  },
  {
    img: "/images/villa1.svg",
    place: "Italy",
    type: "Mountains",
    name: "Villa Makarska",
    icon: "/icons/guests.svg",
    sub: "Guests",
  },
];
