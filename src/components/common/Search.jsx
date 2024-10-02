"use client";

import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaSortUp } from "react-icons/fa";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <div className=" max-md:hidden text-nowrap flex justify-around mb-5 lg:gap-10 gap-4 py-4 lg:px-10 px-2 w-full rounded-lg  shadow-xl shadow-black ">
        <div className="flex gap-8 items-center cursor-pointer " >
          <p className="lg:text-lg text-md font-bold font-raleway">Italy</p>
          {!open ? (
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              <IoMdArrowDropdown size={24}  />
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              <FaSortUp size={20} />
            </button>
          )}
        </div>

        <div className="flex gap-8 items-center cursor-pointer">
          <p className="lg:text-lg text-md font-raleway">Select Dates</p>
          <IoMdArrowDropdown size={24} />
        </div>

        <div className="flex gap-8 items-center cursor-pointer">
          <p className="lg:text-lg text-md font-raleway">Guests</p>
          <IoMdArrowDropdown size={24} />
        </div>

        <div className="flex gap-8 items-center cursor-pointer">
          <p className="lg:text-lg text-md font-bold font-raleway">Price</p>
          <IoMdArrowDropdown size={24} />
        </div>

        <div className="flex justify-between gap-3  w-full bg-lightbrown px-6  py-4 h-12 rounded-lg items-center">
          <input
            placeholder="Search"
            className="lg:text-lg text-md font-raleway outline-none text-white placeholder-white w-[80px] max-lg:w-[60px] bg-lightbrown max-md:w-[30px]"
          />
          <IoIosSearch size={24} />
        </div>
      </div>

      <div className="lg:hidden md:hidden px-4 py-4 rounded-s-lg flex gap-8 justify-between shadow-2xl shadow-black  font-rufina max-sm:w-[250px] w-[500px]">
        <input
          placeholder="Where to??"
          name="text"
          className="text-xl text-start text-primary1 w-full outline-none"
        />
        <IoIosSearch size={30} />
      </div>

      {/* search div for selecting filters */}
      {open && (
        <div
          className="max-md:hidden w-full bg-white "
          data-aos="fade-up"
        >
          <div className="lg:px-10 px-2  font-rufina flex justify-between pt-5">
            <h3 className="text-2xl font-bold">Filters</h3>
            <button className="" >
              <RxCross2 size={30} className="text-black cursor-pointer" />
            </button>
          </div>

          <div className="flex justify-evenly items-start pb-5">
            <div className="flex flex-col gap-y-2 my-2 px-10 font-rufina">
              <p className="text-xl pb-1 font-bold">Locations</p>
              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Seaside</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Mountains</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Town</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">CountrySide</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Mountains</label>
              </div>
            </div>

            <div className="flex flex-col gap-y-2 my-2 px-10 font-rufina">
              <p className="text-xl font-bold">Dates</p>
              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">October 2024</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">November 2024</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Dec 2024</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">January 2024</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Feburary 2024</label>
              </div>
            </div>

            <div className="flex flex-col my-2 px-10 font-rufina">
              <p className="text-xl pb-3 font-bold">Guests</p>
              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Around 2-4</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Around 4-8</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Above 10</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Above 16</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Between 20-25</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">Below 30</label>
              </div>
            </div>

            <div className="flex flex-col my-2 px-10 font-rufina">
              <p className="text-xl pb-3 font-bold">Price</p>
              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">5k/Daily</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">10k/Daily</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">20k/Daily</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">30k/Daily</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">40k/Daily</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" className="" />
                <label className="text-lg">45k/Daily</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
