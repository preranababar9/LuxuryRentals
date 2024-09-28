"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { facility } from "../../../utils/constant";
import ProductCard from "../product/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getAllVilla } from "../../../services/allvillas";

const Villas = () => {

  const {data,isError,isLoading} = useQuery({
    queryKey: ["villas"], 

    queryFn: ()=> getAllVilla()
  });

  if (isError) return <div>error</div>
  if (isLoading) return <div>loading</div>


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
        <div className="flex gap-10 items-center  " data-aos="fade-up">
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
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="rounded-lg lg:w-1/3 bg-white "
              >
               <ProductCard item={item}/>
               
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Villas;


