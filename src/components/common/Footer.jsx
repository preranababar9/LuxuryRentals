import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="lg:py-20 max-md:pt-20 bg-[#dbdee3] max-md:pb-10 ">
      <div className="max-width ">


        
      <div className="flex  absolute -top-full gap-10 justify-center">
          <div className="bg-[#181D24] rounded-lg  w-1/3 py-10 px-5">
            <h4 className=" font-bold text-center text-white font-rufina text-5xl pb-5 ">
              Lets Connect
            </h4>

            <div className="flex justify-start px-12 gap-5  pb-3">
              <p className="text-lg font-rufina font-bold text-white">Phone</p>
              <p className="text-lg font-rufina font-bold text-white">
                +386725612
              </p>
            </div>

            <div className="flex justify-start px-12 gap-5 pb-3">
              <p className="text-lg font-rufina font-bold text-white">Email</p>
              <p className="text-lg font-rufina font-bold text-white">
                rentals@gmail.com
              </p>
            </div>

            <div className="flex justify-start px-12 gap-5 pb-3">
              <p className="text-lg font-rufina font-bold text-white">
                Address
              </p>
              <p className="text-lg font-rufina font-bold text-white">
                367, Luxury rentals Ltd, California, America{" "}
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg py-20 px-10">
            <h4 className=" font-bold text-center font-rufina text-5xl pb-10 ">
              We do love to hear from you
            </h4>

            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your name"
                className="w-1/5 border-b-2 mr-7 border-black font-rufina "
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email"
                className="w-3/4 mb-5 border-b-2 border-black font-rufina "
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Message"
                className="w-full border-b-2 border-black font-rufina "
              />
            </form>

            <p className="text-primary1 pt-2">I accept the terms and conditions</p>

            <button className="bg-primary1 text-white px-8 text-lg font-rufina py-2 rounded-lg mt-5">Send</button>
          </div>
        </div>



        <div className="flex justify-between relative max-md:flex-col  font-rufina">
          <div className=" lg:w-1/2">
            <h4 className="uppercase text-2xl pb-5 ">luxury rentals</h4>
            <p className="text-md lg:pb-16 pb-5 text-primary1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus pariatur inventore.
              
            </p>
          </div>

          <div className=" max-md:mb-8 ">
            <h4 className="uppercase font-bold text-xl lg:pb-5 pb-2">
              Connect with Us
            </h4>
            <p className="pb-2">+00000000000</p>
            <p className="pb-2">info@luxuryrentals.com</p>
          </div>
        </div>

        <div className="flex max-md:flex-col gap-y-2  justify-between">
          <div className="flex lg:gap-5 flex-wrap gap-3 mb-1 justify-start text-primary1">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
          </div>

          <div className="flex gap-2 justify-start text-primary1">
            <p>Luxury Rentals.</p>
            <p> All rights reserved.</p>
          </div>
        </div>




      </div>
    </section>
  );
};

export default Footer;
