import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="lg:py-20 max-md:pt-20 bg-[#dbdee3] max-md:pb-10 ">
      <div className="max-width ">
        <div className="flex justify-between  max-md:flex-col  font-rufina">
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
