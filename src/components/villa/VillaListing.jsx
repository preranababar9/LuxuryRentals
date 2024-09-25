import React from "react";
import ProductCard from "../product/ProductCard";
import { facility } from "../../../utils/constant";
import Search from "../common/Search";

const VillaListing = () => {
  return (
    <section className="pb-20 pt-36 bg-[#f4f3f1]">
      <div className="max-width" >
        <div className="font-rufina text-center mb-5 ">
          <h2 className="text-center lg:text-5xl text-3xl  pb-5">All Villas</h2>
          <p className="text-center pb-10 ">30 results</p>
        </div>

<div className="mb-20 flex justify-center">
        <Search/>
        </div>

   {/* parent div */}
   <div className="flex gap-5 justify-center items-center flex-wrap   " data-aos="fade-up">
        {facility.map((item, index) => (
          <div key={index} className="rounded-lg lg:w-[30%] bg-white ">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default VillaListing;
