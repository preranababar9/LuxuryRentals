import React from "react";
import Image from "next/image";

const Contactus = () => {
  return (
    <section className="pb-20 pt-36 bg-gradient-to-r from-[#c8c8c8] to-[#f4f3f1]">
      <div className="max-width">
        <div>
          <div className="font-rufina text-center ">
            <h2 className="text-center lg:text-5xl text-3xl font-bold pb-5">
              Contact Us
            </h2>
            <p className="text-center pb-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-center pb-10 ">
              {" "}
              Voluptatum eos voluptatem itaque molestiae. Fugit exercitationem
            </p>
          </div>

<div className="lg:w-3/4 mx-auto ">
          <div className="flex max-md:flex-col justify-center w-full">
            <div className=" w-1/2  max-md:w-full">
              <Image
                src="/images/contact.svg"
                alt="Hero image"
                className="w-full    object-cover"
                width={10}
                height={10}
              />
            </div>
            <div className="bg-[#f4f3f1] lg:w-1/2 lg:h-full w-full py-10 lg:px-5">
              <h4 className=" font-bold text-center text-black font-rufina lg:text-4xl text-3xl pb-5 ">
                 Connect with Us
              </h4>

              <div className="flex justify-start lg:px-12 px-5 gap-5  pb-3">
                <p className="text-lg font-rufina font-bold text-black">
                  Phone
                </p>
                <p className="text-lg font-rufina  text-black">
                  +386725612
                </p>
              </div>

              <div className="flex justify-start lg:px-12 px-5 gap-5 pb-3">
                <p className="text-lg font-rufina font-bold text-black">
                  Email
                </p>
                <p className="text-lg font-rufina  text-black">
                  rentals@gmail.com
                </p>
              </div>

              <div className="flex justify-start lg:px-12 px-5 gap-5 pb-16">
                <p className="text-lg font-rufina font-bold text-black">
                  Address
                </p>
                <p className="text-lg font-rufina  text-black">
                  367, Luxury rentals Ltd, California, America{" "}
                </p>
              </div>

              <div className="flex justify-start pb-[6px] lg:px-12 px-5 gap-5 ">
              <Image
                src="/images/social.svg"
                alt="Hero image"
                className="w-1/2 h-1/2 max-md:w-1/2  object-cover"
                width={10}
                height={10}
              />
</div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
