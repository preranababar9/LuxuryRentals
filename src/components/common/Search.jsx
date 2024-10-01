import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
        <div>
        <div className=" max-md:hidden text-nowrap flex justify-around lg:gap-10 gap-4 py-4 lg:px-10 px-2 w-fit rounded-lg  shadow-2xl shadow-black " >
         <div className="flex gap-8 items-center cursor-pointer ">
            <p className="lg:text-lg text-md font-bold font-raleway">Italy</p>
            <IoMdArrowDropdown size={24} />
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

          <div className="flex gap-3 bg-lightbrown px-6 py-4 h-12 rounded-lg items-center">
            <p className="lg:text-lg text-md font-raleway">Search</p>
            <IoIosSearch size={24} />
          </div>


         
    </div>

    <div className="lg:hidden md:hidden px-4 py-4 rounded-s-lg flex gap-8 justify-between shadow-2xl shadow-black  font-rufina max-sm:w-[250px] w-[500px]">

        <input
        placeholder="Where to??"
        name="text"
        className="text-xl text-start text-primary1 w-full outline-none" />
        <IoIosSearch size={30}  />
    </div>

    </div>
  )
}

export default Search