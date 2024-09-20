"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Villas = () => {
  return (
    <section className="py-20 bg-gray-200">
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
            // install Swiper modules
            modules={Navigation}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
          <SwiperSlide className="rounded-lg w-1/3 bg-white ">
            {/* image div */}
            <div className=" ">
              <Image
                src="/images/villa1.svg"
                alt="Hero image"
                className="w-full rounded-lg "
                width={10}
                height={10}
              />

              <div className="font-rufina px-10">
                <p className="pb-2 font-bold text-lg">
                  Italy - <span className="font-normal text-md">Mountains</span>
                </p>

                <h3 className="text-3xl ">Villa Makarska</h3>
              </div>

              <div className="flex flex-wrap justify-evenly  ">
                <div className="flex items-center gap-5 ">
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

          {/* 1st div */}
          <SwiperSlide className="rounded-lg w-1/3 bg-white">
            {/* image div */}
            <div className=" ">
              <Image
                src="/images/villa1.svg"
                alt="Hero image"
                className="w-full rounded-lg "
                width={10}
                height={10}
              />

              <div className="font-rufina px-10">
                <p className="pb-2 font-bold text-lg">
                  Italy - <span className="font-normal text-md">Mountains</span>
                </p>

                <h3 className="text-3xl ">Villa Makarska</h3>
              </div>

              <div className="flex flex-wrap justify-evenly ">
                <div className="flex items-center gap-5">
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

                <div className="flex items-center gap-5">
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

          {/* 1st div */}
          <SwiperSlide className="rounded-lg w-1/3 bg-white">
            {/* image div */}
            <div className=" ">
              <Image
                src="/images/villa1.svg"
                alt="Hero image"
                className="w-full rounded-lg mb-0"
                width={10}
                height={0}
              />

              <div className="font-rufina px-10">
                <p className="pb-2 font-bold text-lg">
                  Italy - <span className="font-normal text-md">Mountains</span>
                </p>

                <h3 className="text-3xl ">Villa Makarska</h3>
              </div>

              <div className="flex flex-wrap justify-evenly ">
                <div className="flex items-center gap-5">
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

                <div className="flex items-center gap-5">
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



           {/* 1st div */}
           <SwiperSlide className="rounded-lg w-1/3 bg-white">
            {/* image div */}
            <div className=" ">
              <Image
                src="/images/villa1.svg"
                alt="Hero image"
                className="w-full rounded-lg mb-0"
                width={10}
                height={0}
              />

              <div className="font-rufina px-10">
                <p className="pb-2 font-bold text-lg">
                  Italy - <span className="font-normal text-md">Mountains</span>
                </p>

                <h3 className="text-3xl ">Villa Makarska</h3>
              </div>

              <div className="flex flex-wrap justify-evenly ">
                <div className="flex items-center gap-5">
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

                <div className="flex items-center gap-5">
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
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Villas;
