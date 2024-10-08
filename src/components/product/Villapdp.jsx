"use client";

import Link from "next/link";
import { MdIosShare } from "react-icons/md";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getVillaById } from "../../../services/allvillas";
import { amenities, dining, distance } from "../../../utils/constant";

const Villapdp = () => {
  const id = useParams().id;
  const { data, isError, isLoading } = useQuery({
    queryKey: ["villas", id],
    queryFn: () => getVillaById(id),
  });

  // console.log(data, id);
  if (isError) return <div>error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <section className="pb-20 pt-32 font-rufina bg-gradient-to-b from-[#d9cdc1] to-[#d3d0c9] ">
      <div className="max-width  overflow-hidden">
        <div>
          <div className="flex justify-between  max-md:hidden mb-5">
            <h2 className="text-4xl font-bold">
              Villa <span className="uppercase">Soho</span>
            </h2>
            <div className="flex gap-2">
              {" "}
              <Link href="" className="text-xl uppercase">
                Share
              </Link>{" "}
              <MdIosShare size={26} />
            </div>
          </div>

          {/* images */}
          <div className="flex gap-3 mb-10 ">
            <img
              src={data.images[0]}
              alt="Villa image"
              width={800}
              height={900}
              className="w-[50%] max-md:w-full"
            ></img>

            <div className="flex flex-wrap gap-2 max-md:hidden">
              {data.images.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt="Villa image"
                  className="w-[300px] h-[250px]"
                />
              ))}
            </div>
          </div>

          {/* details */}

          <div className="flex justify-between max-md:flex-col max-md:gap-y-5" >
            {/* details */}
            <div data-aos="fade-up">
              <div className="mb-5 ">
                <h2 className="text-4xl max-md:text-3xl font-bold uppercase">
                  {data.name}
                </h2>
                <p className="text-lg max-md:text-sm text-nowrap">
                  {data.guests} guests / {data.bedroom} bedrooms /{" "}
                  {data.bathroom} bathrooms / {data.area} m
                </p>
              </div>

              <div className="flex gap-5 mb-5">
                <div>
                  <p className="font-bold text-xl max-md:text-md">Checkin</p>
                  <p className="">From {data.checkinTime} </p>
                </div>

                <div>
                  <p className="font-bold text-xl max-md:text-md">Checkout</p>
                  <p>Until {data.checkoutTime} </p>
                </div>
              </div>

              <div>
                <p className="font-bold text-2xl max-md:text-md max-md:text-md mb-4">
                  Amentities
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-x-20 gap-y-2 max-md:gap-x-12 mb-6">
                  {amenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center text-lg max-md:text-sm  text-nowrap"
                    >
                      <img src={item.img} alt="" className="h-5 max-md:h-4" />
                      <p>{item.sub}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-bold text-2xl max-md:text-md max-md:text-md mb-4">
                    Distances
                  </p>

                  <div className="grid grid-cols-3 max-md:grid-cols-2 gap-x-20 gap-y-2 max-md:gap-x-12 mb-6">
                    {distance.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-2 text-lg max-md:text-sm text-nowrap "
                      >
                        <img src={item.icon} alt="" className="h-5" />
                        <p>{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-2xl max-md:text-md max-md:text-md mb-4">
                    kitchen & Dining
                  </p>

                  <div className="grid grid-cols-3 max-md:grid-cols-2 gap-x-20 gap-y-2 max-md:gap-x-12 mb-6">
                    {dining.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-2 text-lg max-md:text-sm text-nowrap"
                      >
                        <img src={item.icon} alt="" className="h-5" />
                        <p>{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* contact card */}
            <div className="w-1/3 max-md:w-full h-1/2 text-white " data-aos="fade-up">
              <div className="bg-black rounded-lg flex flex-col gap-y-2 items-center  h-full w-full py-10 max-xl:px-4 lg:px-16 px-5 max-md:px-4 ">
                <h4 className=" font-bold text-center  text-white font-rufina lg:text-4xl text-3xl pb-5 ">
                  Contact
                </h4>

                <div className="flex justify-start items-start gap-1">
                  <p className="lg:text-lg font-rufina font-bold text-white">
                    Phone:
                  </p>
                  <p className="lg:text-lg font-rufina  text-white">
                    +386725612
                  </p>
                </div>

                <div className=" flex justify-start gap-1">
                  <p className="lg:text-lg font-rufina font-bold text-white">
                    Email:
                  </p>
                  <p className="lg:text-lg font-rufina  text-white">
                    rentals@gmail.com
                  </p>
                </div>

                <div className=" flex justify-start gap-1 mb-5 ">
                  <p className="lg:text-lg font-rufina font-bold text-white">
                    Visit:
                  </p>
                  <p className="lg:text-lg font-rufina text-nowrap  md:text-wrap text-white">
                    <a>https://rental-villas.vercel.app/</a>
                  </p>
                </div>

                <p className="mb-6">Prefered Language : English</p>

                <button className="bg-pink py-4 px-16 text-center hover:scale-105 duration-300 text-black max-md:px-10 rounded-lg">
                  Get an offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Villapdp;
