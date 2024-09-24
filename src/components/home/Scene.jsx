import React from "react";
import Image from "next/image";

const scene = () => {
  return (
    <div className="py-20 bg-[#dbdee3]">
      <div className="max-width ">
        <div className="lg:flex max-md:flex-col     justify-center">
          <div className="bg-[#181D24] rounded-lg  lg:w-1/3 py-10 lg:px-5 px-2 max-md:mb-6">
            <h4 className=" font-bold text-center text-white font-rufina lg:text-5xl text-3xl pb-5 ">
              Lets Connect
            </h4>

            <div className="flex justify-start lg:px-12 px-5 lg:gap-5 gap-3  pb-3">
              <p className="lg:text-lg text-md font-rufina font-bold text-white">
                Phone{" "}
              </p>
              <p className="lg:text-lg text-md font-rufina font-bold text-white">
                +386725612
              </p>
            </div>

            <div className="flex justify-start lg:px-12 px-5 lg:gap-5 gap-3 pb-3">
              <p className="lg:text-lg text-md font-rufina font-bold text-white">
                Email
              </p>
              <p className="lg:text-lg text-md font-rufina font-bold text-white">
                rentals@gmail.com
              </p>
            </div>

            <div className="flex justify-start lg:px-12 px-5 lg:gap-5 gap-3 pb-3">
              <p className="lg:text-lg text-md font-rufina font-bold text-white">
                Address
              </p>
              <p className="lg:text-lg text-md font-rufina font-bold text-white">
                367, Luxury rentals Ltd, California, America{" "}
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-lg py-10 px-12">
            <h4 className=" font-bold text-center font-rufina lg:text-5xl text-3xl pb-10 ">
              We do love to hear from you
            </h4>

            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your name"
                className="w-full border-b-2 mr-7 mb-5 border-black font-rufina "
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email"
                className="w-full mb-5 border-b-2 border-black font-rufina "
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Message"
                className="w-full border-b-2 border-black font-rufina "
              />
            </form>

            <p className="text-primary1 pt-2">
              I accept the terms and conditions
            </p>

            <button className="bg-primary1 lg:w-1/4 w-full text-white px-8 text-lg font-rufina py-2 rounded-lg mt-5">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default scene;
