import React from "react";
import Image from "next/image";

const ProductCard = ({ item }) => {
  return (
    <div>
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

      <div className="px-10">
        <div className="font-rufina ">
          <p className="pb-2 font-bold text-lg">
            {item.place}-{" "}
            <span className="font-normal text-md">{item.type}</span>
          </p>

          <h3 className="text-3xl ">{item.name}</h3>
        </div>

        <div className="flex flex-wrap gap-2 items-start  ">
          {item?.list?.map((item, index) => (
            <div key={index} className="flex items-center mx-auto w-1/3 gap-5 ">
              <Image
                src={item.icon}
                alt="Hero image"
                className="w-1/5 h-20"
                width={10}
                height={10}
              />

              <p className="text-lg font-rufina">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
