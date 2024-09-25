import React from "react";
import Image from "next/image";

const ProductCard = ({ item }) => {
  return (
    <div className="relative">
      <div className=" ">
        <Image
          src={item.img}
          alt="Hero image"
          className="w-full h-[300px] rounded-lg object-cover "
          quality={100}
          width={500}
          height={500}
        />
      </div>

      <div className="absolute left-5 py-3 px-4 rounded-br-2xl top-10 bg-pink">
   <p className="font-rufina text-black "> From <span className="font-bold">{item.price}/daily</span></p>
      </div>

      <div className="lg:px-10 px-8 py-5">
        <div className="font-rufina pb-4">
          <p className="pb-2 font-bold text-lg">
            {item.place}-{" "}
            <span className="font-normal text-md">{item.type}</span>
          </p>

          <h3 className="text-3xl ">{item.name}</h3>
        </div>

        <div className="flex flex-wrap gap-4 justify-between ">
          {item?.list?.map((item, index) => (
            <div key={index} className="flex gap-3 items-center">
              <Image
                src={item.icon}
                alt="Hero image"
                className="lg:w-[30px] w-[25px] lg:h-10 max-md:h-8"
                width={10}
                height={10}
              />

              <p className="text-lg max-sm:text-md  font-rufina">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
