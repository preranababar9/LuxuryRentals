"use client";

import Link from "next/link";
import { MdIosShare } from "react-icons/md";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getVillaById } from "../../../services/allvillas";

const Villapdp = () => {
  const id = useParams().id;
  const { data, isError, isLoading } = useQuery({
    queryKey: ["villas", id],
    queryFn: () => getVillaById(id),
  });

  console.log(data, id);
  if (isError) return <div>error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <section className="pb-20 pt-32 font-rufina bg-lightbrown">
      <div className="max-width">
        <div>
          <div className="flex justify-between text-white max-md:hidden mb-5">
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
          <div className="flex gap-5 mb-10 ">
            <img
              src={data.images[0]}
              alt="Villa image"
              width={800}
              height={900}
              className="w-[50%] max-md:w-full"
            ></img>

            <div className="flex flex-wrap gap-2 max-md:hidden">
              {data.images.map((item, index) => (
                <img key={index}
                  src={item}
                  alt="Villa image"
                  className="w-[300px] h-[250px]"
                />
              ))}
            </div>
          </div>

          {/* details */}

          <div className="flex justify-between max-md:flex-col max-md:gap-y-5">
            {/* details */}
            <div>
              <div className="mb-5">
                <h2 className="text-4xl max-md:text-3xl font-bold uppercase">
                  {data.name}
                </h2>
                <p className="text-lg max-md:text-sm">
                  8 guests / 6 bedrooms / 6 bathrooms / 280 m
                </p>
              </div>

              <div>
                <p>Checkin</p>
              </div>
            </div>

            {/* contact card */}
            <div className="w-1/3 max-md:w-full ">
              <div className="bg-black rounded-lg  h-full w-full py-10 lg:px-5">
                <h4 className=" font-bold text-center text-white font-rufina lg:text-4xl text-3xl pb-5 ">
                  Connect with Us
                </h4>

                <div className="flex justify-start lg:px-12 px-5 gap-5  pb-3">
                  <p className="text-lg font-rufina font-bold text-white">
                    Phone
                  </p>
                  <p className="text-lg font-rufina  text-white">+386725612</p>
                </div>

                <div className="flex justify-start lg:px-12 px-5 gap-5 pb-3">
                  <p className="text-lg font-rufina font-bold text-white">
                    Email
                  </p>
                  <p className="text-lg font-rufina  text-white">
                    rentals@gmail.com
                  </p>
                </div>

                <div className="flex justify-start lg:px-12 px-5 gap-5 pb-16">
                  <p className="text-lg font-rufina font-bold text-white">
                    Address
                  </p>
                  <p className="text-lg font-rufina  text-white">
                    367, Luxury rentals Ltd, California, America{" "}
                  </p>
                </div>

                <div className="flex justify-start pb-[6px] lg:px-12 px-5 gap-5 ">
                  <Image
                    src="/images/social.svg"
                    alt="Hero image"
                    className="w-1/2 h-1/2 max-md:w-1/2  object-cover"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Villapdp;
