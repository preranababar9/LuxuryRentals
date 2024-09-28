"use client";
import React from "react";
import ProductCard from "../product/ProductCard";

import Search from "../common/Search";
import { useQuery } from "@tanstack/react-query";
import { getAllVilla } from "../../../services/allvillas";

const VillaListing = () => {
  const {data,isError,isLoading} = useQuery({
    queryKey: ["villas"], 

    queryFn: ()=> getAllVilla()
  });

  if (isError) return <div>error</div>
  if (isLoading) return <div>loading</div>
  
  return (
    <section className="pb-20 pt-36 bg-[#f4f3f1]">
      <div className="max-width">
        <div className="font-rufina text-center mb-5 ">
          <h2 className="text-center lg:text-5xl text-3xl  pb-5">All Villas</h2>
          <p className="text-center pb-10 ">30 results</p>
        </div>

        <div className="mb-20 flex justify-center">
          <Search />
        </div>

        {/* parent div */}
        <div
          className="flex gap-5 justify-center items-center flex-wrap   "
          data-aos="fade-up"
        >
          {data?.map((item, index) => (
            <div key={index} className="rounded-lg w-[30%] lg:w-1/2 bg-white ">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillaListing;
