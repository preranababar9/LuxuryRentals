import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <Link
    href={`/villadetails/${item.id}`}
     className="relative">
      <div className=" ">
        <img
          src={item?.images[0]}
          alt="Hero image"
          className="w-full h-[300px] rounded-lg object-cover "
        />
      </div>

      <div className="absolute left-5 py-3 px-4 rounded-br-2xl top-10 bg-pink">
        <p className="font-rufina text-black ">
          {" "}
          From <span className="font-bold">{item.price}/daily</span>
        </p>
      </div>

      <div className="lg:px-10 px-8 py-5">
        <div className="font-rufina pb-4">
          <p className="pb-2 font-bold text-lg">
            {item.country}-{" "}
            <span className="font-normal text-md">{item.region}</span>
          </p>

          <h3 className="text-3xl ">{item.name}</h3>
        </div>

        <div className="flex flex-wrap gap-4 justify-between ">
          {[
            "/icons/guests.svg",
            "/icons/bed.svg",
            "/icons/area.svg",
            "/icons/bath.svg",
          ].map((i, index) => (
            <div key={index} className="flex gap-3 items-center">
              <Image
                src={i}
                alt="Hero image"
                className="lg:w-[30px] w-[25px] lg:h-10 max-md:h-8"
                width={10}
                height={10}
              />

              <p className="text-lg max-sm:text-md  font-rufina">
                {index === 0 ? (
                  <>{item.guests} guests</>
                ) : index === 1 ? (
                  <>{item.bedroom} bedroom</>
                ) : index === 2 ? (
                  <>{item.area} area</>
                ) : (
                  <>{item.bathroom} bathroom</>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
