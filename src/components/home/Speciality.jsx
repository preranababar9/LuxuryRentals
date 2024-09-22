import React from "react";
import Image from "next/image";


const Speciality = () => {
  return (
    <section className="py-20  bg-[#f4f3f1]">
      <div className="max-width my-20">
        <div className="font-rufina text-center mb-14 ">
          <h2 className="text-center lg:text-5xl text-3xl  pb-5">
            Our Properties Specialities
          </h2>
        </div>

        <div className="flex justify-evenly max-md:w-full gap-10 max-lg:flex-col items-center ">
          {special.map((item, index) => (
            <div key={index} className="flex max-md:w-1/2 flex-col items-center justify-center  font-rufina">
              <Image
                src={item.icon}
                alt="Hero image"
                className="w-10 h-10 "
                width={10}
                height={10}
              />

              <h4 className="lg:text-3xl text-center text-2xl pt-8">{item.title}</h4>
              <p className="text-xl pt-3 ">{item.msg}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speciality;

const special = [
  {
    icon: "/icons/s1.svg",
    title: "Seafront",
    msg: "have a look",
  },
  {
    icon :  "/icons/s2.svg",
    title : "Pet friendly",
    msg : "pets allowed"
  },
  {
    icon :  "/icons/s3.svg",
    title : "Electric car",
    msg : "charge your car"
  },
  {
    icon :  "/icons/s4.svg",
    title : "Fitness/Gym",
    msg : "workout"
  },
  {
    icon :  "/icons/s5.svg",
    title : "Boot moorning",
    msg : "take a strip"
  },
];
